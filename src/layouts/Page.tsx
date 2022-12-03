import { Box, T } from 'MUI'
import { colors } from 'utils/color'

interface PageProps {
  title: string
  children: React.ReactNode
}

export const Page = ({ title, children }: PageProps) => {
  return (
    <Box component="article" sx={{ backgroundColor: colors.yellowed, px: 10, py: 6 }}>
      <T variant="h1">{title}</T>
      {children}
    </Box>
  )
}
