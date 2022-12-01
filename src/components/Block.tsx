import { Button, Stack, Grid, Box, T } from 'MUI'
import { ComponentProps, ReactNode } from 'react'
import { mapColor, Color } from 'utils/color'
import './Block.css'

interface BlockProps {
  content: ReactNode
  className?: string
  sx?: ComponentProps<typeof Box>['sx']
}
export const Block = ({ content, className, sx }: BlockProps) => {
  return (
    <Box className={'Block ' + className} sx={sx}>
      {content}
    </Box>
  )
}

interface ColoredBlockProps extends BlockProps {
  color: Color
  darkText?: boolean
}

export const ColoredBlock = (props: ColoredBlockProps) => {
  const Title = (
    <T
      variant="h3"
      component="div"
      className={'Block__Text ' + (props.darkText ? 'Block__TextDark' : '')}
    >
      {props.content}
    </T>
  )
  return (
    <Block
      {...props}
      className="BlockCenteredText"
      content={Title}
      sx={{ backgroundColor: mapColor(props.color) }}
    />
  )
}

export const NullBlock = () => <Box className={'Block'} />

export const ImageBlock = ({
  src,
  alt,
  color = 'white',
}: {
  src: string
  alt: string
  color?: Color
}) => (
  <Block
    className={'Block--Img'}
    sx={{ backgroundColor: mapColor(color) }}
    content={<img src={src} alt={alt} className="BlockImg" />}
  />
)
