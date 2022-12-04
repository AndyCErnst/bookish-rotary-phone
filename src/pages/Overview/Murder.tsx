import { useParams } from 'react-router-dom'
import { Stack, Grid } from 'MUI'
import { Post } from 'components/Post'
import { Page } from 'layouts/Page'

import { ClickableImage } from 'components/ClickableImage'
import { DecoBreak } from 'components/Break'
import { Category } from 'types'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import { ImageBlock, NullBlock } from 'components/Block'
import MurderWords from 'images/viz/MurderWords.png'
import MurderPopularity from 'images/viz/MurderPopularity.png'

import Murder1 from 'images/deco/murder/74408313.3.jpg'
import Murder2 from 'images/deco/murder/74408316.3.jpg'
import Murder3 from 'images/deco/murder/74408334.3.jpg'
import Murder5 from 'images/deco/murder/74414739.3.jpg'
import Castle from 'images/deco/misc/74412308.3.jpg'

export const Murder = () => {
  const params = useParams<{ topic: Category }>()
  return (
    <Page title="Murder">
      <Stack spacing={4}>
        <Grid container spacing={4} paddingBottom={4}>
          <Grid md={8}>
            <p>
              Broadsides were a business, and nothing sells better than tales of
              violent murder! "Horrid," "barbarous," “inhuman” were frequently
              used to describe these violent crimes. Often the writer of the
              broadside made up details of the crime when information was not
              available. The more sensationalised the writers could make a
              murder, the better a broadside might sell. In particular, the
              infamous string of murders in Edinburgh by Burke and Hare get
              particular attention, with over a dozen broadsides mentioning
              their names.
            </p>
          </Grid>
          <Grid md={4}>
            <ImageBlock src={Murder1} alt="" />
          </Grid>
          <Grid md={4}>
            <ImageBlock src={Murder2} alt="" />
          </Grid>
          <Grid md={8}>
            <BroadsidesOfDay topic={params.topic!} />
          </Grid>
        </Grid>

        <div>
          <h2>Words used with "Murder"</h2>
          <ClickableImage src={MurderWords} />
        </div>
        <div>
          <h2>Popularity of Murder in Broadsides</h2>
          <ClickableImage src={MurderPopularity} />
        </div>
<DecoBreak />
        <div>
          <h2>Images Related to Murder</h2>
          <Grid container spacing={6}>
            <Grid xs={6} md={4}>
              <ImageBlock src={Murder5} alt="" />
            </Grid>

            <Grid xs={6} md={4}>
              <ImageBlock src={Castle} alt="" />
            </Grid>

            <Grid xs={6} md={4}>
              <ImageBlock src={Murder3} alt="" />
            </Grid>
          </Grid>
        </div>
      </Stack>
    </Page>
  )
}
