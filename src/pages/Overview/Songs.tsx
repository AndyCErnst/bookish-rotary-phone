import { Stack, Grid } from 'MUI'
import { useParams } from 'react-router-dom'
import { Page } from 'layouts/Page'
import { Post } from 'components/Post'
import { Category } from 'types'
import { ImageBlock } from 'components/Block'
import { BroadsidesOfDay } from './BroadsidesOfDay'
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
import { FloralBreak } from 'components/Break'

export const Songs = () => {
  const params = useParams<{ topic: Category }>()
  return (
    <Page title="Songs and Poems">
      <Stack spacing={4}>
        <Grid container spacing={4} paddingBottom={4}>
          <Grid md={8}>
            <p>
              Many of the broadsides published were songs and poems. As the
              traditional minstrel declined in popularity, publishing broadsides
              containing songs and poems grew more popular. Songs in the
              broadsides were published to existing Scottish tunes or to new
              tunes written for the new song. Most ballads were sung by hawkers,
              or street traders, who were selling the broadsides. When the
              majority of the population at the time couldn’t read, songs and
              poems were a way of sharing information and news without having to
              read. Famous writers and poets, such as Robert Burns, sometimes
              wrote poems and songs for the broadsides, but most were written by
              unknown authors. Below we have produced some summary
              visualisations about the topic of songs in the broadsides and the
              most commonly used words.
            </p>
          </Grid>
          <Grid md={4}>
            <ImageBlock src={Song1} alt="" />
          </Grid>
          <Grid md={6}>
            <ImageBlock src={Song6} alt="" expand />
          </Grid>
          <Grid md={6}>
            <BroadsidesOfDay topic={params.topic!} />
          </Grid>
        </Grid>

        <div>
          <h2>Song and Poem Topics</h2>
          <ClickableImage src={SongTopics} />
        </div>

        <div>
          <h2>Most Common Words in Songs and Poems</h2>
          <ClickableImage src={SongCloud} />
        </div>

        <FloralBreak />

        <div>
          <h2>Sounds of the Past</h2>
          <Grid container spacing={6}>
            <Grid xs={6} md={4}>
              <Post title="The Rocky Road to Dublin">
                <Player src={Rocky} />
              </Post>
            </Grid>
            <Grid xs={6} md={4}>
              <Post title="Auld Lang Syne">
                <Player src={Auld} />
              </Post>
            </Grid>
            <Grid xs={6} md={4}>
              <Post title="Whiskey in the Jar">
                <Player src={Whiskey} />
              </Post>
            </Grid>
          </Grid>
        </div>

        <div>
          <h2>Images Related to Songs and Poems</h2>
          <Grid container spacing={6}>
            <Grid xs={6} md={4}>
              <ImageBlock src={Song5} alt="" />
            </Grid>
            <Grid xs={6} md={4}>
              <ImageBlock src={Song4} alt="" fit />
            </Grid>

            <Grid xs={6} md={4}>
              <ImageBlock src={Song2} alt="" />
            </Grid>
            <Grid xs={6} md={4}>
              <ImageBlock src={Song3} alt="" />
            </Grid>

            <Grid xs={6} md={4}>
              <ClickableImage name="broadsides/74412223.3.jpg" />
            </Grid>
          </Grid>
        </div>
      </Stack>
    </Page>
  )
}
