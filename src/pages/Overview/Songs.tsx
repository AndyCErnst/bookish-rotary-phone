import { Stack, Grid } from 'MUI'
import { useParams } from 'react-router-dom'
import { Post } from 'components/Post'
import { Category } from 'types'
import { ImageBlock } from 'components/Block'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import { OverviewBase } from 'components/OverviewBase'
import { ClickableImage } from 'components/ClickableImage'
import { Player } from 'components/AudioPlayer'
import Auld from 'audio/Auld Lang Syne.mp3'
import Rocky from 'audio/The Rocky Road to Dublin.mp3'
import Whiskey from 'audio/Whiskey in the Jar.mp3'
import SongTopics from 'images/viz/SongsPoems_topics.png'
import SongCloud from 'images/viz/SongsPoems_wordcloudBrown.png'
import Song1 from 'images/deco/songs/74407637.3.jpg'
import Song2 from 'images/deco/songs/74408612.3.jpg'
import Song3 from 'images/deco/songs/74408634.3.jpg'
import Song4 from 'images/deco/songs/74411291.3.jpg'
import Song5 from 'images/deco/songs/74414463.3.jpg'
import Song6 from 'images/deco/songs/74417558.3.jpg'
import Song7 from 'images/deco/songs/74417569.3.jpg'
import { FloralBreak } from 'components/Break'

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
        [
          <Stack spacing={2}>
            <ImageBlock src={Song1} alt="" />
            <Post title="The Rocky Road to Dublin">
              <Player src={Rocky} />
            </Post>
          </Stack>,
          4,
        ],
        [<FloralBreak />, 12],
        [<BroadsidesOfDay topic={params.topic!} />, 4],
        [
          <Stack spacing={2}>
            <ImageBlock src={Song2} alt="" />{' '}
            <Post title="Auld Lang Syne">
              <Player src={Auld} />
            </Post>
          </Stack>,
          4,
        ],
        [
          <Post title="">
            <ClickableImage name="broadsides/74412223.3.jpg" />
          </Post>,
          4,
        ],
        [
          <Post title="Most Common Words in Songs and Poems">
            <ClickableImage src={SongCloud} />
          </Post>,
          12,
        ],

        [
          <Post title="Whiskey in the Jar">
            <Player src={Whiskey} />
          </Post>,
          4,
        ],

        [<ImageBlock src={Song3} alt="" />, 4],
        [<ImageBlock src={Song4} alt="" />, 4],
        [<ImageBlock src={Song5} alt="" />, 8],
        [<ImageBlock src={Song6} alt="" />, 4],
        [<ImageBlock src={Song7} alt="" />, 4],
      ]}
    />
  )
}
