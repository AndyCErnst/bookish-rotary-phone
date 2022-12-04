import { Slider, FormLabel, Grid } from 'MUI'

interface Props {
  timeRange: [number, number]
  setTimeRange: (range: [number, number]) => void
}

const min = 1650
const max = 1910
const marks = [
  { value: min, label: min },
  { value: 1700, label: 1700 },
  { value: 1750, label: 1750 },
  { value: 1800, label: 1800 },
  { value: 1850, label: 1850 },
  { value: max, label: max },
]

export const TimeControl = ({ timeRange, setTimeRange }: Props) => {


  const handleChange = (event: Event, newValue: number | number[]) => {
    setTimeRange(newValue as [number, number])
  }
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={3}>
        <FormLabel id="time-label">Filter by year</FormLabel>
      </Grid>
      <Grid xs={12} md={9}>
        <Slider
          aria-labelledby="time-label"
          min={min}
          max={max}
          onChange={handleChange}
          value={timeRange}
          marks={marks}
          valueLabelDisplay="auto"
        />
      </Grid>
    </Grid>
  )
}
