import { Stack, Grid } from 'MUI'
import { useParams } from 'react-router-dom'
import { Post } from 'components/Post'
import { DecoBreak } from 'components/Break'
import { Category } from 'types'
import { ImageBlock } from 'components/Block'
import { ClickableImage } from 'components/ClickableImage'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import { OverviewBase } from 'components/OverviewBase'
import Trial1 from 'images/deco/trials/74407662.3.jpg'
import Trial2 from 'images/deco/trials/74408323.3.jpg'
import Trial3 from 'images/deco/trials/74408341.3.jpg'
import Trial4 from 'images/deco/trials/74412223.3.jpg'
import Trial5 from 'images/deco/trials/74413999.3.jpg'
import Trial6 from 'images/deco/trials/74414082.3.jpg'

export const Trials = () => {
  const params = useParams<{ topic: Category }>()
  return (
    <OverviewBase
      title="Trials"
      sections={[
        [
          <Post>
            Trials were commonly reported on, and one of the most popular topics
            printed in the Scottish broadsides. Crimes and the resulting trial
            could be printed in a number of issues to cover the original crime,
            the trial, the execution and confessions and last words. Many of the
            speeches made on the scaffold and confessions were not real, and
            instead imagined by the writers of the broadside. Below we have
            produced two summary visualisations that show what crimes people
            were tried for and the outcomes of the trials.
          </Post>,
          12,
        ],
        [
          <Post>
            <ClickableImage name="viz/Trials_outcomes.png" />
          </Post>,
          8,
        ],
        [<BroadsidesOfDay topic={params.topic!} />, 4],
        [<DecoBreak />, 12],
        [
          <Post>
            <ClickableImage name="viz/Trials_reasons.png" />
          </Post>,
          8,
        ],
        [
          <Stack spacing={2}>
            <ImageBlock src={Trial1} alt="" />
            <ImageBlock src={Trial2} alt="" />
          </Stack>,
          4,
        ],
        [<ImageBlock src={Trial3} alt="" />, 4],
        [<ImageBlock src={Trial4} alt="" />, 4],
        [<ImageBlock src={Trial5} alt="" />, 4],
        [<ImageBlock src={Trial6} alt="" />, 4],
      ]}
    />
  )
}
