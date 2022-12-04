import { useCallback, useContext, useEffect, useState } from 'react'
import {
  MapContainer,
  TileLayer,
  LayerGroup,
  CircleMarker,
  useMap,
  Tooltip,
  ZoomControl,
  useMapEvents,
} from 'react-leaflet'
import { Button, T, Box } from 'MUI'
import { Location, LatLon, Category } from 'types'
import { locationMap } from 'data'
import { MapContext } from 'contexts/MapContext'
import { ShowAllButton } from './ShowAllButton'
import { colors } from 'utils/color'
import './Map.css'

export type CatSum = Record<Category | 'total', number>

interface MapProps {
  locationCounts: Record<Location, CatSum>
  selectedLocation: Location | undefined
  onSelectLocation: (name: Location | undefined) => void
  resetFilters?: () => void
}

// Wrapper and Map are separated so Map can use the leaflet hooks while in content
export const MapWrapper = (props: MapProps) => {
  const {position, zoom} = useContext(MapContext)
  return (
    <div>
      <MapContainer
        className="mapContainer"
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapEvents />
        <ZoomControl position="topright" />
        <Map {...props} />
      </MapContainer>
    </div>
  )
}

const Map = ({
  locationCounts,
  selectedLocation,
  onSelectLocation,
  resetFilters,
}: MapProps) => {
  const map = useMap()

  const clickButton = useCallback(
    (loc: string, coord: LatLon) => {
      if (loc === selectedLocation) {
        onSelectLocation(undefined)
      } else {
        onSelectLocation(loc as Location)
        map.panTo(coord)
      }
    },
    [selectedLocation]
  )

  return (
    <>
      <LayerGroup>
        {Object.keys(locationCounts).map((place: string) => (
          <AreaCircle
            key={place}
            placename={place as Location}
            counts={locationCounts[place as Location]}
            onClick={clickButton}
            selected={place === selectedLocation}
          />
        ))}
      </LayerGroup>
      {resetFilters ? (
        <Button
          onClick={resetFilters}
          variant="contained"
          sx={{
            backgroundColor: colors.coffee,
            position: 'absolute',
            top: '8px',
            left: '8px',
            zIndex: 1000,
          }}
        >
          Reset Filters
        </Button>
      ) : null}
      <ShowAllButton />
    </>
  )
}

interface AreaCircleProps {
  placename: Location
  counts: CatSum
  onClick: (place: string, latlng: LatLon) => void
  selected: boolean
}

const bubbleStyles = {
  // fillColor: colors.oldpaper,
  // color: colors.coffee,
  fillColor: 'forestgreen',
  color: 'forestgreen',
  fillOpacity: 0.4,
  weight: 3,
}
const bubbleStylesSelected = {
  // fillColor: '#ffece0',
  // color: colors.rust,
  fillColor: 'cornflowerblue',
  color: 'cornflowerblue',
  // fillOpacity: 0.8,
  weight: 3,
}

const AreaCircle = ({
  placename,
  counts,
  onClick,
  selected,
}: AreaCircleProps) => {
  if (!locationMap[placename]) {
    console.error('no ' + placename + ' in location map')
    return null
  }
  const {
    total,
    murder,
    trials,
    courtship,
    ['songs and poems']: songs,
  } = counts
  const { lat, lng } = locationMap[placename]
  const radius = normalizeSize(total)
  return (
    <CircleMarker
      center={[lat, lng]}
      radius={radius}
      pathOptions={selected ? bubbleStylesSelected : bubbleStyles}
      eventHandlers={{
        click: (e) => onClick(placename, e.latlng),
      }}
    >
      <Tooltip
        direction="bottom"
        offset={[0, radius]}
        opacity={1}
        className="tooltip"
      >
        <Box padding={1}>
          <T variant="h3">
            {placename} ({total})
          </T>
          <T
            variant="h4"
            component="ul"
            marginTop={1}
            padding={0}
            sx={{ listStyle: 'none' }}
          >
            {murder ? <li>Murder ({murder})</li> : null}
            {trials ? <li>Trials ({trials})</li> : null}
            {courtship ? <li>Love and Courtship ({courtship})</li> : null}
            {songs ? <li>Songs and Poems ({songs})</li> : null}
          </T>
        </Box>
      </Tooltip>
    </CircleMarker>
  )
}

const normalizeSize = (size: number) => {
  const reduced = Math.sqrt(size) * 2.5 + 4
  return reduced < 7 ? 7 : reduced
}


const MapEvents = () => {
  const {setPosition, setZoom} = useContext(MapContext)
  const map = useMapEvents({
    moveend: () => {
      setPosition(map.getCenter())
    },
    zoomend: () => {
      console.log(map.getZoom())
      setZoom(map.getZoom())
    }
  })
  return null
}
