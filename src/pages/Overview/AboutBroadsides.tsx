import { Image } from 'components/Image'
import { ClickableImage } from 'components/ClickableImage'
import { Post } from 'components/Post'
import { OverviewBase } from './OverviewBase'
import PerYear from 'images/viz/BroadsidesBasics_No._broadsides_per_year.png'
import Places from 'images/viz/BroadsideBasics_CommonPlaces.png'
import Topics from 'images/viz/BroadsideBasics_Topics.png'

export const AboutBroadsides = () => {
  return (
    <OverviewBase
      title="About Scottish Broadsides"
      sections={[
        [<Post>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat at quam id tempus. In vestibulum sit amet metus quis pretium. Vestibulum purus tortor, bibendum a semper a, iaculis et nisl. Nulla ut ligula odio. Aenean blandit, nisi quis pharetra consectetur, quam dui consectetur eros, at tincidunt mauris ante non erat. Donec vitae lectus nec mi dapibus fringilla. Etiam urna arcu, tempor sed magna nec, commodo aliquam dolor. Suspendisse bibendum vehicula tellus vel facilisis. Nulla diam nisl, suscipit quis lorem eu, porta luctus lorem. Nullam iaculis ultricies nisi sit amet pretium. Praesent vitae ex a lorem fringilla ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a nunc lobortis, rhoncus lacus eu, lobortis orci.</Post>, 12],
        // add styled <hr /> here
        [
          <Post title="What were they reading?">
            <ClickableImage src={Topics} />
          </Post>,
          6,
        ],
        [
          <Post title="Where were they reading it?">
            <ClickableImage src={Places} />
          </Post>,
          6,
        ],
        [
          <Post title="When were they reading it?">
            <ClickableImage src={PerYear} />
          </Post>,
          6,
        ],
      ]}
    />
  )
}
