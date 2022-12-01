import { Stack, Box, T } from 'MUI'
import { ComponentProps, ReactNode } from 'react'
import { mapColor, Color, colors } from 'utils/color'

const BlockCSS = { height: '300px', boxSizing: 'border-box' }

interface BlockProps {
  children?: ReactNode
  className?: string
  sx?: ComponentProps<typeof Box>['sx']
}
export const Block = ({ children, className, sx }: BlockProps) => {
  return (
    <Box className={className} sx={sx}>
      {children}
    </Box>
  )
}

interface ColoredBlockProps extends BlockProps {
  title?: string
  color: Color
  darkText?: boolean
}

export const ColoredBlock = ({
  children,
  color,
  darkText,
  title,
  ...props
}: ColoredBlockProps) => {
  const Title = (
    <T variant="h2" component="div" sx={{ width: '100%' }}>
      {title}
    </T>
  )
  return (
    <Block
      {...props}
      sx={{
        ...BlockCSS,
        backgroundColor: mapColor(color),
        padding: 3,
        color: darkText ? colors.coffee : colors.white,
        wordBreak: 'break-word',
      }}
    >
      <Stack>
        {Title}
        {children}
      </Stack>
    </Block>
  )
}

export const NullBlock = () => <Box sx={{ ...BlockCSS }} />

export const ImageBlock = ({
  src,
  alt,
  color = 'white',
}: {
  src: string
  alt: string
  color?: Color
}) => (
  <Block sx={{ ...BlockCSS, backgroundColor: mapColor(color) }}>
    {
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: '100%', height: '100%' }}
      />
    }
  </Block>
)
