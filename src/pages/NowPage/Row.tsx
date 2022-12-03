import { T, Grid, Box, Stack } from 'MUI'
import { colors } from 'utils/color'
import './Row.css'

interface RowProps extends ImagePairProps {
  title: string
  children: string
}
export const Row = ({ title, children, ...props }: RowProps) => {
  return (
    <>
      <Grid
        xs={12}
        md={3}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
        className="Row"
        spacing={0}
      >
        <T
          variant="h2"
          sx={{
            padding: 3,
            width: '100%',
            backgroundColor: colors.yellowed,
            zIndex: 1,
          }}
        >
          {title}
        </T>
      </Grid>
      <Grid sm={12} md={9}>
        <ImagePair {...props} />
      </Grid>

      <Grid sm={0} md={3}></Grid>
      <Grid sm={12} md={9}>
        <Text>{children}</Text>
      </Grid>
    </>
  )
}

interface ImagePairProps {
  left: string
  leftAlt: string
  right: string
  rightAlt: string
}

const ImagePair = ({ left, leftAlt, right, rightAlt }: ImagePairProps) => {
  const imgStyle: any = {
    objectFit: 'cover',
    height: {xs: '250px', md:'300px'},
    width: '100%',
    margin: 'auto',
    display: 'block',
  }
  return (
    <Grid container spacing={0}>
      <Grid xs={5}>
        <Box component="img" src={left} alt={leftAlt} sx={imgStyle} />
      </Grid>
      <Grid xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{ height: '100%', borderLeft: '1px dashed ' + colors.coffee }}
        />
      </Grid>
      <Grid xs={5}>
      <Box component="img" src={right} alt={rightAlt} sx={imgStyle} />
      </Grid>
    </Grid>
  )
}

const Text = ({ children }: { children: string }) => (
  <Box component="p" sx={{ marginX: 2, marginBottom: 4 }}>
    {children}
  </Box>
)

export const ThenAndNow = () => (
  <>
    <Grid xs={0} md={3}></Grid>
    <Grid xs={12} md={9}>
        <T variant="h2" component="div">
      <Grid container spacing={0}>
        <Grid xs={5}>
          <Stack
            sx={{ backgroundColor: colors.oldpaper, padding: 2 }}
            justifyContent="center"
            alignItems="center"
          >
            THEN
          </Stack>
        </Grid>
        <Grid xs={2}></Grid>

        <Grid xs={5}>
          <Stack
            sx={{ backgroundColor: colors.oldpaper, padding: 2 }}
            justifyContent="center"
            alignItems="center"
          >
            NOW
          </Stack>
        </Grid>
      </Grid>
      </T>
    </Grid>
  </>
)
