import { useState, createContext, ReactNode } from 'react'

type Coordinates = { lat: number; lng: number }

const startingPosition: Coordinates = { lat: 55.9491414, lng: -3.1805859 } // Edinburgh
export const MapContext = createContext<{
  position: Coordinates
  setPosition: (c: Coordinates) => void
  zoom: number
  setZoom: (z: number) => void
}>({
  position: startingPosition,
  setPosition: () => {},
  zoom: 13,
  setZoom: () => {},
})

export function MapContextProvider({ children }: { children: ReactNode }) {
  const [position, setPosition] = useState<Coordinates>(startingPosition)
  const [zoom, setZoom] = useState<number>(13)
  return (
    <MapContext.Provider value={{ position, setPosition, zoom, setZoom }}>
      {children}
    </MapContext.Provider>
  )
}
