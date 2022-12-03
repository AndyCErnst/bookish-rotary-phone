import { T } from 'MUI'

export const ResultsNumber = ({
  matching,
  location,
  filters = false,
}: {
  matching: any[]
  location?: string
  filters?: boolean
}) => {
  const numberDisplay = [
    matching.length,
    matching.length === 1 ? 'broadside' : 'broadsides',
    location ? 'mentioning ' + location : '',
    filters ? 'for these filters' : '',
  ].join(' ')
  return (
    <T sx={{ py: 2 }} variant="h3" component="div">
      {numberDisplay}
    </T>
  )
}
