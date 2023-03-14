import { Box, Grid, Container, T, Stack } from 'MUI'
import { Link } from 'react-router-dom'
import { colors, fonts } from 'utils/color'

export function Footer() {
  const today = new Date()
  const border = '1px solid ' + colors.coffee
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: colors.white, color: colors.coffee }}
    >
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
        <Grid
          container
          sx={{ textAlign: 'center', fontFamily: fonts.heading, paddingTop: 2 }}
          spacing={2}
        >
          <Grid sm={6} md={4} lg={2}>
            <Link to="/summary">About Broadsides</Link>
          </Grid>
          <Grid sm={6} md={4} lg={2}>
            <Link to="/map">Map</Link>
          </Grid>
          <Grid sm={6} md={4} lg={2}>
            <Link to="/now">Then vs Now</Link>
          </Grid>
          <Grid sm={6} md={4} lg={2}>
            <Link to="/our-work">Our Work</Link>
          </Grid>
          <Grid sm={6} md={4} lg={2}>
            <Link to="/search">Search</Link>
          </Grid>
          <Grid sm={6} md={4} lg={2}>
            <a href="https://data.nls.uk/data/digitised-collections/broadsides-printed-in-scotland/">
              Data Source (NLS)
            </a>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ paddingTop: 1 }}>
        <Stack justifyContent="center">
        <T variant="body2" color="text.secondary" align="center">
          {'Broadside data is property of '}
          <a
            href="https://data.nls.uk/data/digitised-collections/broadsides-printed-in-scotland/"
          >
            The National Library of Scotland
          </a>
        </T>
        <T variant="body2" color="text.secondary" align="center">
          {`Website ©Andy Ernst ${new Date().getFullYear()}.`}
        </T>
        </Stack>
      </Container>
    </Box>
  )
}
