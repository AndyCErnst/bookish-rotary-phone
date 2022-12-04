import { Box, T } from 'MUI'
import { colors } from 'utils/color'

interface PageProps {
  title: string
  children: React.ReactNode
  smallHeading?: boolean
}

export const Page = ({ title, children, smallHeading = false }: PageProps) => {
  return (
    <Box
      component="article"
      sx={{
        backgroundColor: colors.yellowed,
        px: { xs: 2, md: 10 },
        paddingTop: 6,
        paddingBottom: 10,
      }}
    >
      <T variant={smallHeading ? 'h2' : 'h1'} component="h1">
        {title}
      </T>
      {children}
    </Box>
  )
}
