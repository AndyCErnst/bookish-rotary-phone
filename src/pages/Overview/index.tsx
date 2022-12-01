import { Stack, Grid } from 'MUI'
import { useParams } from 'react-router-dom'
import { Post } from 'components/Post'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import { Category } from 'types'
import { Murder } from './Murder'
import { Songs } from './Songs'
import { Courtship } from './Courtship'
import { Trials } from './Trials'

const pages = {
  'songs and poems': <Songs />,
  'murder': <Murder />,
  'trials': <Trials />,
  'courtship': <Courtship />,
}
export const Topic = () => {
  const {topic} = useParams<{topic: Category}>()
  if(!topic) { 
    return null
  }

  return pages[topic] || null
}
