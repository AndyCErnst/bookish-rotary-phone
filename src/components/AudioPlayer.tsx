import React, { useState, useEffect } from 'react'
import { Stack, Box } from 'MUI'
import PlayCircle from '@mui/icons-material/PlayCircle'
import PauseCircle from '@mui/icons-material/PauseCircle'
import { keyboardAction } from 'utils/a11yUtils'
import { colors } from 'utils/color'

const useAudio = (src: string): [boolean, VoidFunction] => {
  const [audio] = useState(new Audio(src))
  const [playing, setPlaying] = useState(false)

  const toggle: VoidFunction = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, toggle]
}

const IconSizes = { fontSize: '160px' }
export const Player = ({ src }: { src: string }) => {
  const [playing, toggle] = useAudio(src)

  return (
    <Stack
      aria-label={playing ? 'Pause' : 'Play'}
      onClick={toggle}
      onKeyPress={keyboardAction(toggle)}
      role="button"
      tabIndex={0}
      sx={{
        minHeight: '300px',
        backgroundColor: '#999',
        borderRadius: '10px',
        color: colors.slate,
      }}
      justifyContent="center"
      alignItems="center"
    >
      {playing ? <PauseCircle sx={IconSizes} /> : <PlayCircle sx={IconSizes} />}
    </Stack>
  )
}
