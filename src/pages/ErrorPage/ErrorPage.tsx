import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import './ErrorPage.css'

export const ErrorPage = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      className="errorContainer"
    >
    <Typography variant="h4" component="div">
      <p>Your broadside must have blown away in the breeze, sorry.</p>
      <p>Try going back.</p>
      </Typography>
    </Stack>
  )
}
