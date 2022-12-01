import { Slider, FormLabel } from 'MUI'

interface Props {
  timeRange: [number, number]
  setTimeRange: (range: [number, number]) => void
}

export const TimeControl = ({ timeRange, setTimeRange }: Props) => {
  const min = 1643
  const max = 1910
  const marks = [
    { value: min, label: min },
    { value: 1700, label: 1700 },
    { value: 1750, label: 1750 },
    { value: 1800, label: 1800 },
    { value: 1850, label: 1850 },
    { value: max, label: max },
  ]

  const handleChange = (event: Event, newValue: number | number[]) => {
    setTimeRange(newValue as [number, number])
  }
  return (
    <div>
      <FormLabel id="time-label">Filter by year</FormLabel>

      <Slider
        aria-labelledby="time-label"
        min={min}
        max={max}
        onChange={handleChange}
        value={timeRange}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </div>
  )
}
