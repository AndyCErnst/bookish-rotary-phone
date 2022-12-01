import { useMap } from 'react-leaflet'
import { Button } from 'MUI'

export const ShowAllButton = () => {
  const map = useMap()
  const showAllScotland = () => {
    map.setView({ lat: 55.9491414, lng: -3.1805859 }, 7)
  }
  return (
    <Button
      onClick={showAllScotland}
      variant="contained"
      color="warning"
      className="showAllButton"
    >
      Show all Scotland
    </Button>
  )
}
