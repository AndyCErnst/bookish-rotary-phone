import { useState } from 'react'
import { Stack, DialogTitle, Dialog, Box } from 'MUI'
import { BroadsideImage } from './Image'
import './ClickableImage.css'
import { StringMappingType } from 'typescript'

export const ClickableImage = ({
  name = '',
  src = '',
  alt,
  dialogTitle,
}: {
  name?: string
  src?: string
  alt?: string
  dialogTitle?: string
}) => {
  const [open, setOpen] = useState(false)
  const image = src ? (
    <img src={src} alt={alt} className="clickableImage" />
  ) : (
    <BroadsideImage name={name} alt={alt} className="clickableImage" />
  )
  return (
    <>
      <Dialog onClose={() => setOpen(false)} open={open} maxWidth={false}>
        <Box sx={{ padding: 1 }}>
          <DialogTitle>{dialogTitle}</DialogTitle>
          {image}
        </Box>
      </Dialog>
      <div
        role="button"
        onClick={() => setOpen(true)}
        tabIndex={0}
        className="Button"
      >
        {image}
      </div>
    </>
  )
}
