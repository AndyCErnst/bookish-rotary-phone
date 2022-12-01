import { useCallback } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  CircleMarker,
  useMapEvents,
  useMap,
  Tooltip,
} from 'react-leaflet'
import { Button } from 'MUI'
import { Broadside, Location, LatLon } from 'types'
import { locationMap } from 'data'
import { ShowAllButton } from './ShowAllButton'
import './Map.css'

type Coordinates = [number, number]

// Edinburgh
const startingPosition: Coordinates = [55.9491414, -3.1805859]

interface MapProps {
  locationCounts: Record<Location, number>
  selectedLocation: Location | undefined
  onSelectLocation: (name: Location | undefined) => void
  resetFilters?: () => void
}

export const MapWrapper = (props: MapProps) => {
  return (
    <div>
      <MapContainer
        className="mapContainer"
        // center={startingPosition}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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
    [selectedLocation],
  )

  return (
    <>
      <LayerGroup>
        {Object.keys(locationCounts).map((place: string) => (
          <AreaCircle
            key={place}
            placename={place as Location}
            count={locationCounts[place as Location]}
            onClick={clickButton}
            selected={place === selectedLocation}
          />
        ))}
      </LayerGroup>
      {resetFilters ? (
        <Button
          onClick={resetFilters}
          variant="contained"
          className="resetFiltersButton"
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
  count: number
  onClick: (place: string, latlng: LatLon) => void
  selected: boolean
}

const bubbleStyles = { fillColor: 'blue', color: 'blue' }
const bubbleStylesSelected = { fillColor: 'green', color: 'green' }

const AreaCircle = ({
  placename,
  count,
  onClick,
  selected,
}: AreaCircleProps) => {
  if (!locationMap[placename]) {
    console.error('no ' + placename + ' in location map')
    return null
  }
  const { lat, lng } = locationMap[placename]
  const radius = normalizeSize(count)
  return (
    <CircleMarker
      center={[lat, lng]}
      radius={radius}
      pathOptions={selected ? bubbleStylesSelected : bubbleStyles}
      eventHandlers={{
        click: (e) => onClick(placename, e.latlng),
      }}
    >
      <Tooltip direction="bottom" offset={[0, radius]} opacity={1}>
        {placename} ({count})
      </Tooltip>
    </CircleMarker>
  )
}

const normalizeSize = (size: number) => {
  const reduced = Math.sqrt(size) * 2.5 + 4
  return reduced < 7 ? 7 : reduced
}

// function EventsComponent() {
//   const map = useMapEvents({
//     click: () => {
//       console.log(map.locate())
//     },
//     locationfound: (location) => {
//       map.panTo(location.latlng)
//       console.log('location found:', location)
//     },
//   })
//   return null
// }
