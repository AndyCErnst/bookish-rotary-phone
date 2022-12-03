import { useState } from 'react'
import { Stack, Button, Tooltip } from 'MUI'
import Cry from '../images/icons/cry.svg'
import Laugh from '../images/icons/laugh.svg'
import Heart from '../images/icons/heart.svg'
import { Reaction } from 'types'
import './Vote.css'

export const Vote = () => {
  const [pressed, setPressed] = useState({enjoyable: false, funny: false, sad: false})
  const onClick = (name: Reaction) => {
    setPressed({...pressed, [name]: !pressed[name] })
  }
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <EmotionButton onClick={onClick} name={'enjoyable'} img={Heart} pressed={pressed['enjoyable']}/>
      <EmotionButton onClick={onClick} name={'funny'} img={Laugh} pressed={pressed['funny']} />
      <EmotionButton onClick={onClick} name={'sad'} img={Cry} pressed={pressed['sad']} />
    </Stack>
  )
}

const EmotionButton = ({
  img,
  name,
  pressed,
  onClick,
}: {
  img: string
  name: Reaction
  pressed: boolean
  onClick: (name: Reaction) => void
}) => {
  return (
    <Button
      className="VoteButton"
      onClick={() => onClick(name)}
      variant={pressed ? "outlined" : "text"}
    >
      <Tooltip title={pressed ? `Remove vote ${name}` : `Vote ${name}`}>
        <img src={img} alt={name} height="100%" />
      </Tooltip>
    </Button>
  )
}
