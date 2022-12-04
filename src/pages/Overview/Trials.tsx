import { Stack, Grid } from 'MUI'
import { useParams } from 'react-router-dom'
import { Page } from 'layouts/Page'
import { DecoBreak } from 'components/Break'
import { Category } from 'types'
import { ImageBlock } from 'components/Block'
import { ClickableImage } from 'components/ClickableImage'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import Outcomes from 'images/viz/Trials_outcomes.png'
import Reasons from 'images/viz/Trials_reasons.png'
import Trial1 from 'images/deco/trials/74407662.3.jpg'
import Trial2 from 'images/deco/trials/74408323.3.jpg'
import Trial3 from 'images/deco/trials/74408341.3.jpg'
import Trial4 from 'images/deco/trials/74412223.3.jpg'
import Trial5 from 'images/deco/trials/74413999.3.jpg'
import Trial6 from 'images/deco/trials/74414082.3.jpg'

export const Trials = () => {
  const params = useParams<{ topic: Category }>()
  return (
    <Page title="Trials">
      <Stack spacing={4}>
        <Grid container spacing={4} paddingBottom={4}>
          <Grid md={8}>
            <p>
              Trials were commonly reported on, and one of the most popular
              topics printed in the Scottish broadsides. Crimes and the
              resulting trial could be printed in a number of issues to cover
              the original crime, the trial, the execution and confessions and
              last words. Many of the speeches made on the scaffold and
              confessions were not real, and instead imagined by the writers of
              the broadside. Below we have produced two summary visualisations
              that show what crimes people were tried for and the outcomes of
              the trials.
            </p>
          </Grid>
          <Grid md={4}>
            <ImageBlock src={Trial5} alt="" />
          </Grid>
          <Grid md={4}>
            <ImageBlock src={Trial3} alt="" />
          </Grid>
          <Grid md={8}>
            <BroadsidesOfDay topic={params.topic!} />
          </Grid>
        </Grid>

      <div>
        <h2>The Reason for Trials</h2>
        <ClickableImage src={Reasons} />
      </div>

      <div>
        <h2>Trial Outcomes</h2>
        <ClickableImage src={Outcomes} />
      </div>

      <DecoBreak />
      <div>
        <h2>Images Related to Trials</h2>
        <Grid container spacing={6}>
          <Grid xs={6} md={4}>
            <ImageBlock src={Trial1} alt="" />
          </Grid>
          <Grid xs={6} md={4}>
            <ImageBlock src={Trial4} alt="" expand />
          </Grid>
          <Grid xs={6} md={4}>
            <ImageBlock src={Trial2} alt="" />
          </Grid>
          <Grid xs={6} md={4}>
            <ImageBlock src={Trial6} alt="" />
          </Grid>
        </Grid>
      </div>
      </Stack>

    </Page>
  )
}
