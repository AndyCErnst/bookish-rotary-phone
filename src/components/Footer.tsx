import { Box, Grid, Container, T, Link, Stack } from 'MUI'
import { colors } from 'utils/color'

export function Footer() {
  const today = new Date()
  const border = '2px solid ' + colors.coffee
  return (
    <Box component="footer" sx={{ backgroundColor: colors.white }}>
      <Box
        sx={{
          py: 2,
          textAlign: 'center',
          textTransform: 'uppercase',
          borderTop: border,
          borderBottom: border,
        }}
      >
        <T variant="h6" component="div">
          <Grid container>
            <Grid xs={2}>Volume I</Grid>
            <Grid xs={8}>
              {today.toLocaleDateString('en-GB', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Grid>
            <Grid xs={2} sx={{ textAlign: 'center' }}>
              Cost: 1 Penny
            </Grid>
          </Grid>
        </T>
      </Box>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <T variant="body2" color="text.secondary" align="center">
          {'Broadside data is property of '}
          <Link
            color="inherit"
            href="https://data.nls.uk/data/digitised-collections/broadsides-printed-in-scotland/"
          >
            The National Library of Scotland
          </Link>
        </T>
        <T variant="body2" color="text.secondary" align="center">
          {'Website is copyright © Andy Ernst '}
          {new Date().getFullYear()}
          {'.'}
        </T>
      </Container>
    </Box>
  )
}

/* */

function Copyright() {
  return (
    <T variant="body2" color="text.secondary" align="center">
      {'Copyright © Andy Ernst '}
      {new Date().getFullYear()}
      {'.'}
    </T>
  )
}