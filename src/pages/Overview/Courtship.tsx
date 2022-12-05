import { useParams } from 'react-router-dom'
import { Stack, Grid } from 'MUI'
import { Page } from 'layouts/Page'
import { Category } from 'types'
import { ImageBlock } from 'components/Block'
import { FlourishBreak } from 'components/Break'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import { ClickableImage } from 'components/ClickableImage'
import Courtship1 from 'images/deco/courtship/74407740.3.jpg'
import Courtship2 from 'images/deco/courtship/74411271.3.jpg'
import Courtship3 from 'images/deco/courtship/74414359.3.jpg'
import Courtship4 from 'images/deco/courtship/74414467.3.jpg'
import Courtship5 from 'images/deco/courtship/74417183.3.jpg'
import CourtLoc from 'images/viz/Courtship-Locations Plot.png'
import CourtTopics from 'images/viz/CourtshipPopularTopics.png'
import CourtWords from 'images/viz/Courtship-Words.png'

export const Courtship = () => {
  const params = useParams<{ topic: Category }>()
  return (
    <Page title="Love and Courtship">
      <Stack spacing={4}>
        <Grid container spacing={4} paddingBottom={4}>
          <Grid md={8}>
            <p>
              Courtship and love in the time period of the Scottish broadsides
              is an interesting topic to explore further. Courtship and love was
              written about in a variety of ways, including songs, such as
              romantic love letters; humour, such as silly lover letters; and
              crimes of passion, which were written about in the context of
              murder and trials. Below are some summary visualisations that show
              where in Scotland courtship was written about, what words were
              commonly used before love and the topics that were written about
              in broadsides about courtship.
            </p>
          </Grid>
          <Grid md={4}>
            <ImageBlock src={Courtship2} alt="" />
          </Grid>
          <Grid md={6}>
            <ImageBlock src={Courtship1} alt="" />
          </Grid>
          <Grid md={6}>
            <BroadsidesOfDay topic={params.topic!} />
          </Grid>
        </Grid>

        <div>
          <h2>Locations Mentioned</h2>
          <ClickableImage src={CourtLoc} />
        </div>

        <div>
          <h2>Popular Topics</h2>
          <ClickableImage src={CourtTopics} />
        </div>
        <div>
          <h2>Most Common Words</h2>
          <ClickableImage src={CourtWords} />
        </div>

        <FlourishBreak />
        <div>
          <h2>Images Related to Courtship and Love</h2>
          <Grid container spacing={6}>
            <Grid xs={6} md={4}>
              <ImageBlock src={Courtship3} alt="" />
            </Grid>
            <Grid xs={6} md={4}>
              <ImageBlock src={Courtship4} alt="" expand />
            </Grid>
            <Grid xs={6} md={4}>
              <ImageBlock src={Courtship5} alt="" />
            </Grid>
          </Grid>
        </div>
      </Stack>
    </Page>
  )
}
