import { useState, useEffect } from 'react'
import { Stack, Paper } from 'MUI'
import PlayCircle from '@mui/icons-material/PlayCircle'
import PauseCircle from '@mui/icons-material/PauseCircle'
import { keyboardAction } from 'utils/a11yUtils'
import { colors } from 'utils/color'
import './AudioPaper.css'

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
      justifyContent="center"
      alignItems="center"
      className="AudioPlayer"
    >
      {playing ? <PauseCircle sx={IconSizes} /> : <PlayCircle sx={IconSizes} />}
    </Stack>
  )
}
