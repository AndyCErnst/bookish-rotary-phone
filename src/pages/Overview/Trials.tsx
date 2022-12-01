import { Stack, Grid } from 'MUI'
import { useParams } from 'react-router-dom'
import { Post } from 'components/Post'
import { Category } from 'types'
import { Topic } from 'components/TopicSections'
import { ClickableImage } from 'components/ClickableImage'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import { OverviewBase } from './OverviewBase'

export const Trials = () => {
  const params = useParams<{topic: Category}>()
  return (
     <OverviewBase title="Trials" sections={[
      [<Post>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat at quam id tempus. In vestibulum sit amet metus quis pretium. Vestibulum purus tortor, bibendum a semper a, iaculis et nisl. Nulla ut ligula odio. Aenean blandit, nisi quis pharetra consectetur, quam dui consectetur eros, at tincidunt mauris ante non erat. Donec vitae lectus nec mi dapibus fringilla. Etiam urna arcu, tempor sed magna nec, commodo aliquam dolor. Suspendisse bibendum vehicula tellus vel facilisis. Nulla diam nisl, suscipit quis lorem eu, porta luctus lorem. Nullam iaculis ultricies nisi sit amet pretium. Praesent vitae ex a lorem fringilla ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a nunc lobortis, rhoncus lacus eu, lobortis orci.</Post>, 12],
      [
        <Post>
          <ClickableImage name="viz/Trials_outcomes.png" />
        </Post>,
        8,
      ],
      [<BroadsidesOfDay topic={params.topic!}/>, 4],
      [
        <Post>
          <ClickableImage name="viz/Trials_reasons.png" />
        </Post>,
        8,
      ],
      ]} />
  )
}
