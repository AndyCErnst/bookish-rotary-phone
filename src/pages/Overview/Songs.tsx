import { Stack, Grid } from 'MUI'
import { useParams } from 'react-router-dom'
import { Post } from 'components/Post'
import { Category } from 'types'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import { OverviewBase } from 'components/OverviewBase'
import { ClickableImage } from 'components/ClickableImage'
import SongTopics from 'images/viz/SongsPoems_topics.png'
import SongCloud from 'images/viz/SongsPoems_wordcloudBrown.png'

export const Songs = () => {
  const params = useParams<{ topic: Category }>()
  return (
    <OverviewBase
      title="Songs and Poems"
      sections={[
        [
          <Post>
            Many of the broadsides published were songs and poems. As the
            traditional minstrel declined in popularity, publishing broadsides
            containing songs and poems grew more popular. Songs in the
            broadsides were published to existing Scottish tunes or to new tunes
            written for the new song. Most ballads were sung by hawkers, or
            street traders, who were selling the broadsides. When the majority
            of the population at the time couldn’t read, songs and poems were a
            way of sharing information and news without having to read. Famous
            writers and poets, such as Robert Burns, sometimes wrote poems and
            songs for the broadsides, but most were written by unknown authors.
            Below we have produced some summary visualisations about the topic
            of songs in the broadsides and the most commonly used words.
          </Post>,
          12,
        ],
        [
          <Post title="Song and Poem Topics">
            <ClickableImage src={SongTopics} />
          </Post>,
          8,
        ],
        [<BroadsidesOfDay topic={params.topic!} />, 4],
        [
          <Post title="Most Common Words in Songs and Poems">
            <ClickableImage src={SongCloud} />
          </Post>,
          12,
        ],
        [
          <Post title="">
            <ClickableImage name="broadsides/74412223.3.jpg" />
          </Post>,
          4,
        ],
      ]}
    />
  )
}
