import { useParams } from 'react-router-dom'
import { Post } from 'components/Post'
import { ClickableImage } from 'components/ClickableImage'
import { Category } from 'types'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import { OverviewBase } from 'components/OverviewBase'
import MurderWords from 'images/viz/MurderWords.png'
import MurderPopularity from 'images/viz/MurderPopularity.png'

export const Murder = () => {
  const params = useParams<{ topic: Category }>()
  return (
    <OverviewBase
      title="Murder"
      sections={[
        [
          <Post>
            Broadsides were a business, and nothing sells better than tales of
            violent murder! "Horrid," "barbarous," “inhuman” were frequently
            used to describe these violent crimes. Often the writer of the
            broadside made up details of the crime when information was not
            available. The more sensationalised the writers could make a murder,
            the better a broadside might sell. In particular, the infamous
            string of murders in Edinburgh by Burke and Hare get particular
            attention, with over a dozen broadsides mentioning their names.
          </Post>,
          12,
        ],
        [
          <Post title='Words used with "Murder"'>
            <ClickableImage src={MurderWords} />
          </Post>,
          8,
        ],
        [<BroadsidesOfDay topic={params.topic!} />, 4],
        [
          <Post title="Popularity of Murder in Broadsides">
            <ClickableImage src={MurderPopularity} />
          </Post>,
          8,
        ],
      ]}
    />
  )
}
