import { Stack, Box, T } from 'MUI'
import { ComponentProps, ReactNode } from 'react'
import { mapColor, Color, colors } from 'utils/color'
import { Link } from 'react-router-dom'
import ArrowOutward from '@mui/icons-material/ArrowOutward'

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
  color: Color
  darkText?: boolean
}

export const ColoredBlock = ({
  children,
  color,
  darkText,
  ...props
}: ColoredBlockProps) => {
  return (
    <Block
      {...props}
      sx={{
        ...BlockCSS,
        backgroundColor: mapColor(color),
        padding: 3,
        color: darkText ? colors.coffee : colors.white,
        wordBreak: 'break-word',
        textDecorationColor: 'currentcolor',
      }}
    >
      {children}
    </Block>
  )
}

interface TitleBlockProps extends ColoredBlockProps {
  title?: string
  to: string
}

export const TitleBlock = ({
  title,
  children,
  to,
  ...props
}: TitleBlockProps) => {
  const Title = (
    <T variant="h2" component="div" sx={{ width: '100%', mb: 2 }}>
      {title}
    </T>
  )
  return (
    <ColoredBlock {...props}>
      <Box
        component={Link}
        to={to}
        sx={{ color: props.darkText ? colors.coffee : colors.white }}
      >
        <Stack justifyContent="space-between" sx={{ height: '100%' }}>
          <div>
            {Title}
            {children}
          </div>
          <Box sx={{ alignSelf: 'flex-end' }}>
            Learn More{' '}
            <ArrowOutward sx={{ fontSize: 18, verticalAlign: 'middle' }} />
          </Box>
        </Stack>
      </Box>
    </ColoredBlock>
  )
}

export const NullBlock = () => <Box sx={{ ...BlockCSS }} />

export const ImageBlock = ({
  src,
  alt,
  color = 'white',
  expand = false,
}: {
  src: string
  alt: string
  color?: Color
  expand?: boolean
}) => (
  <Stack
    sx={{
      ...BlockCSS,
      width: 'auto',
      height: expand ? 'auto' : BlockCSS.height,
      backgroundColor: mapColor(color),
      padding: 1,
    }}
    justifyContent="center"
    alignItems="center"
  >
    {
      <img
        src={src}
        alt={alt}
        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
      />
    }
  </Stack>
)
