import { Box, T } from 'MUI'
import { colors } from 'utils/color'

interface PageProps {
  title: string
  children: React.ReactNode
  smallHeading?: boolean
}

export const Page = ({ title, children, smallHeading = false }: PageProps) => {
  return (
    <Box component="article" sx={{ backgroundColor: colors.yellowed, px: 10, py: 6 }}>
      <T variant={smallHeading ? "h2" : "h1"} component="h1">{title}</T>
      {children}
    </Box>
  )
}
