import { Box } from 'MUI'

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
    <Box sx={{ py: 2 }}>
      <div>{numberDisplay}</div>
    </Box>
  )
}
