import { useRef, useState } from 'react'
import { Box, Stack, Slider } from 'MUI'
import Comic1 from './images/storyboard 1.png'
import Comic2 from './images/storyboard 2.png'
import Comic3 from './images/storyboard 3.png'
import Comic4 from './images/storyboard 4.png'
import Comic5 from './images/storyboard 5.png'
import Comic6 from './images/storyboard 6.png'
const images = [Comic1, Comic2, Comic3, Comic4, Comic5, Comic6]

export const Comic = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [time, setTime] = useState(0)
  
  const formatLabel = (e: number) => {
   if(e >= 92) {
    return '21st Century'
   }

   if(e >= 78) {
    return 'Mid 19th Century'
   }
   if(e >= 51) {
    return '19th Century'
   }
   if(e >= 33) {
    return '18th Century'
   }
   return '17th Century'
  }

  const handleChange = (e: Event, newValue: number | number[]) => {
    // image total width is scrollWidth (16821px)
    setTime(newValue as number)
    const {scrollWidth, clientWidth } = ref.current!
    const scrollTarget = (scrollWidth - clientWidth) * ((newValue as number) / 100)
    ref.current?.scroll({ left: scrollTarget })
  }
  return (
    <Box component="section">
      <Stack
        className="ComicContainer"
        sx={{
          overflowX: 'hidden',
          height: 400,
        }}
        direction="row"
        ref={ref}
      >
        {images.map((img) => (
          <img src={img} key={img} />
        ))}
      </Stack>
      <Slider
        aria-label="comic progression"
        min={0}
        max={100}
        onChange={handleChange}
        value={time}
        valueLabelFormat={formatLabel}
        // marks={marks}
        valueLabelDisplay="auto"
      />
    </Box>
  )
}
