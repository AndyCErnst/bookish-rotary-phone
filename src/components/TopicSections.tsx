import { Stack, Grid } from 'MUI'

interface TopicProps {
  sections: [React.ReactElement, number][]
}
export const Topic = ({ sections }: TopicProps) => {
  return (
    <Grid container spacing={2}>
      {sections.map(([el, size], i) => (
        <Grid key={i} xs={size}>
          {el}
        </Grid>
      ))}
    </Grid>
  )
}
