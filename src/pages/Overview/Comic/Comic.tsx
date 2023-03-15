import { useRef, useState } from 'react'
import { Box, Stack, Slider } from 'MUI'
import Comic1 from './images/storyboard 1.jpg'
import Comic2 from './images/storyboard 2.jpg'
import Comic3 from './images/storyboard 3.jpg'
import Comic4 from './images/storyboard 4.jpg'
import Comic5 from './images/storyboard 5.jpg'
import Comic6 from './images/storyboard 6.jpg'
const images = [Comic1, Comic2, Comic3, Comic4, Comic5, Comic6]
const altText = [`Blockwood prints arranged as a comic. Broadsides in the 17th center. 
Charles's II returned to Great Britain in 1660 to reclaim the British throne by right. Figures with speach bubbles,
"The royal order has been issued. I have to post the proclamation." 
"What's thaton the wall? A proclaimation?" "Everyone come read the word of the King!"`,
`Since the 16th century, broadsides have been a popular medium for printing current affais and ballads, often priced at just half a penny.
A group of three sing, "When I was young and youth did bloom, where fancy led me I did roam."
A man remarks, "What a lovely song!"`,
`18th century. In the 18th century, block prints of public executions became popular in broadsides. 
These were usually produced by printers specialising in crime and trials. These sometimes contained illustrations, although there were standard images from woodcuts used repeatedly.
A guard says, "Follow their example and you'll share the same fate!"
An onlooker says, "How horrid! I best follow the law.""`,
`The mechanical printing press was invented in the 19th century so there was an increase in the production of broadsides.
More woodcut art prints than before.
A person upon a carriage exclaims, "Onward, to Edinburgh!"
Sometimes printers distribute their own goods, but they rely heavily on hawkers, street peddlers, and patrolmen.
They shout the latest publications on the streets, or take them to markets and fairs across Scotland.
"Here are the latest broadsides, just a penny!"
A group replies, "Let's learn the latest songs!"
A man asks, "What's the news today?"`,
`Mid 19th century. By the mid 19th century, cheap newspapers and penny dreadfuls (serial literature) began to replace broadsides and other street literature. 
A couple remarks, "Newspapers are cheap now and have so much variety!"`,
`21st Century. Today, news channels and social media threaten even newspapers.
Fortunately, broadsides and newspapers are saved in the National Library of Scotland.
Broadsides died out around 1925, will newspapers share the same fate?`,]

const marks = [
  { value: 92, label: '21st Century' },
  { value: 78, label: 'Mid 19th Century' },
  { value: 51, label: '19th Century' },
  { value: 33, label: '18th Century' },
  { value: 0, label: '17th Century' },
]
export const Comic = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [time, setTime] = useState(0)

  const formatLabel = (e: number) => {
    for (const { value, label } of marks) {
      if (e >= value) return label
    }
  }

  const handleChange = (e: Event, newValue: number | number[]) => {
    // image total width is scrollWidth (16821px)
    setTime(newValue as number)
    const { scrollWidth, clientWidth } = ref.current!
    const scrollTarget =
      (scrollWidth - clientWidth) * ((newValue as number) / 100)
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
        {images.map((img, i) => (
          <img src={img} key={img} alt={altText[i]}/>
        ))}
      </Stack>
      <Slider
        aria-label="comic progression"
        min={0}
        max={100}
        onChange={handleChange}
        value={time}
        valueLabelFormat={formatLabel}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </Box>
  )
}
