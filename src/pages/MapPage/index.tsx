import { useState, useCallback, useMemo, useEffect } from 'react'
import { Category } from 'types'
import { Grid, Box, Stack, T } from 'MUI'
import { Page } from 'layouts/Page'
import { ArticleList } from 'components/ArticleList'
import { ResultsNumber } from 'components/ResultsNumber'
import { broadsidesList } from 'data'
import { Location, catsList, Broadside } from 'types'
import { colors } from 'utils/color'
import { MapWrapper } from './Map'
import { FilterControl } from './FilterControls'
import { TimeControl } from './TimeControl'

const initialTimeRange: [number, number] = [1643, 1910]
const timeRangeIsInitial = (timeRange: [number, number]) =>
  timeRange[0] === initialTimeRange[0] && timeRange[1] === initialTimeRange[1]

const noFiltersSelected = (
  timeRange: [number, number],
  activeCats: Category[],
  noneCat: boolean,
  location?: Location
) =>
  timeRangeIsInitial(timeRange) &&
  activeCats.length === catsList.length &&
  noneCat &&
  !location

const matchesCats = (
  activeCats: Category[],
  noneCat: boolean,
  cats: Category[]
) => {
  // nothing selected, display same as everything selected
  if (noneCat && activeCats.length === catsList.length) {
    return true
  }
  // allowing uncategorized broadsides
  if (noneCat && cats.length === 0) {
    return true
  }
  // checking categorized broadsides against active categories
  const matches = cats.some((cat) => activeCats.includes(cat))
  if (!matches) {
    return false
  }
  return true
}


export const MapView = () => {
  const [activeCats, setCats] = useState<Category[]>(catsList)
  const [noneCat, setNoneCat] = useState<boolean>(true)
  const [timeRange, setTimeRange] = useState<[number, number]>(initialTimeRange)
  const [location, setLocation] = useState<Location | undefined>()

  const filtering = !noFiltersSelected(timeRange, activeCats, noneCat, location)
  const resetFilters = useCallback(() => {
    setCats(catsList)
    setNoneCat(true)
    setTimeRange(initialTimeRange)
    setLocation(undefined)
  }, [])

  // If the interaction starts getting slow, refactor to a debounce
  // and update the map with a delay.
  const current = useMemo(() => {
    return broadsidesList.filter((bs) => {
      if (!matchesCats(activeCats, noneCat, bs.categories)) {
        return false
      }

      // Don't care about the 80 broadsides without years for now
      if (!bs.year) {
        return false
      }
      const [start, end] = timeRange
      if (bs.year < start || bs.year > end) {
        return false
      }
      return true
    })
  }, [activeCats, noneCat, timeRange])

  const locationCounts = useMemo(
    () =>
      current.reduce((acc, bs) => {
        bs.locations.forEach((loc) => {
          acc[loc] = (acc[loc] ?? 0) + 1
        })
        return acc
      }, {} as Record<Location, number>),
    [current]
  )

  const listed = useMemo(
    () =>
      location
        ? current.filter((bs) => bs.locations.includes(location))
        : current,
    [current, location]
  )

  return (
    <Page title="Where were the Broadsides?">
      <Box sx={{ position: 'relative' }}>
        <FilterControl
          setCats={setCats}
          activeCats={activeCats}
          noneCat={noneCat}
          setNoneCat={setNoneCat}
        />
        <MapWrapper
          locationCounts={locationCounts}
          onSelectLocation={setLocation}
          selectedLocation={location}
          resetFilters={filtering ? resetFilters : undefined}
        />
      </Box>
      <Box sx={{ marginTop: 6, px: 2 }}>
        <TimeControl timeRange={timeRange} setTimeRange={setTimeRange} />
      </Box>
      <section>
        <Stack
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          sx={{ marginTop: 6, marginBottom: 2 }}
        >
          <T variant="h2">Matching Broadsides</T>
          <ResultsNumber
            matching={listed}
            location={location}
            filters={filtering}
          />
        </Stack>

        <ArticleList articles={listed} />
      </section>
    </Page>
  )
}
