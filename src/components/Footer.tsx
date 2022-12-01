import { Box, Container, T, Link } from 'MUI'
import './Footer.css'

function Copyright() {
  return (
    <T variant="body2" color="text.secondary" align="center">
      {'Copyright © Andy Ernst '}
      {new Date().getFullYear()}
      {'.'}
    </T>
  )
}

export function Footer() {
  return (
    <Box component="footer" sx={{ py: 1 }} className="Footer">
      <Container maxWidth="lg">
        {/* <T variant="h6" align="center" gutterBottom>
          something
        </T>
        <T
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          something else
        </T> */}

        <T variant="body2" color="text.secondary" align="center">
          {'Broadside data is property of '}
          <Link color="inherit" href="https://data.nls.uk/data/digitised-collections/broadsides-printed-in-scotland/">
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
