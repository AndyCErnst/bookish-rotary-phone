import { Stack, Grid } from 'MUI'
import { useParams } from 'react-router-dom'
import { Post } from 'components/Post'
import { Category } from 'types'
import { Topic } from 'components/TopicSections'
import { ClickableImage } from 'components/ClickableImage'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import { OverviewBase } from 'components/OverviewBase'


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
        [
          <Post>
            <ClickableImage name="viz/Trials_reasons.png" />
          </Post>,
          8,
        ],
      ]}
    />
  )
}
