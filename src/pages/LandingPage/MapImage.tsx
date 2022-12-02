import Image from 'images/map.png'
import { Link } from 'react-router-dom'
import { T, Box } from 'MUI'
import ArrowOutward from '@mui/icons-material/ArrowOutward'
import './MapImage.css'

export const MapImage = () => {
  return (
    <Box sx={{ padding: 4, position: 'relative' }}>
      <Link to="/map">
        <img
          src={Image}
          className="MapImage__Image"
          alt="old style map of the United Kingdom"
        />
        {/* <T variant="h3" component="div" className={'MapImage__Text'}>
          Map <ArrowOutward sx={{ fontSize: 40 }} />
        </T> */}
      </Link>
    </Box>
  )
}
