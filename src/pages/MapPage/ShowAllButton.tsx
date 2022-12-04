import { useMap } from 'react-leaflet'
import { IconButton, Button } from 'MUI'
import HomeIcon from '@mui/icons-material/Home'

export const ShowAllButton = () => {
  const map = useMap()
  const showAllScotland = () => {
    map.setView({ lat: 56.51707901932375, lng: -3.5815429687500004 }, 7)
  }
  return (
    <IconButton
      onClick={showAllScotland}
      aria-label="Show all of Scotland"
      size="small"
      // mock the style of leaflet zoom controls
      sx={{
        position: 'absolute',
        top: '80px',
        right: '10px',
        zIndex: 1000,
        backgroundColor: 'white',
        borderRadius: 1,
        height: '34px',
        width: '34px',
        border: '2px solid rgba(0,0,0,0.35)',
        '&:hover': {
          backgroundColor: '#f4f4f4'
        }
      }}
    >
      <HomeIcon />
    </IconButton>
  )
}
