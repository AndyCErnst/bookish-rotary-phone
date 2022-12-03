import { useState, useCallback, useMemo, useEffect } from 'react'
import { Category } from 'types'
import { Grid, Container, Stack, T } from 'MUI'
import { ArticleList } from 'components/ArticleList'
import { ResultsNumber } from 'components/ResultsNumber'
import { broadsidesList } from 'data'
import { Location, catsList, Broadside } from 'types'
import { MapWrapper } from './Map'
import { FilterControl } from './FilterControls'
import { TimeControl } from './TimeControl'
import './index.css'

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
    <section className={'MapPage'}>
      <T variant="h1" sx={{marginBottom: 4}}>Where were the Broadsides?</T>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <FilterControl
            setCats={setCats}
            activeCats={activeCats}
            noneCat={noneCat}
            setNoneCat={setNoneCat}
          />
        </Grid>
        <Grid xs={12} md={8}>
          <Container>
            <TimeControl timeRange={timeRange} setTimeRange={setTimeRange} />
          </Container>
        </Grid>
      </Grid>

      <MapWrapper
        locationCounts={locationCounts}
        onSelectLocation={setLocation}
        selectedLocation={location}
        resetFilters={filtering ? resetFilters : undefined}
      />
      <section>
        <Stack>
        <T variant="h3" sx={{marginTop: 4}}>Matching Broadsides</T>
          <ResultsNumber
            matching={listed}
            location={location}
            filters={filtering}
          />

          <ArticleList articles={listed} />
        </Stack>
      </section>
    </section>
  )
}
