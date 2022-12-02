import { useParams } from 'react-router-dom'
import { Stack } from 'MUI'
import { Post } from 'components/Post'
import { ClickableImage } from 'components/ClickableImage'
import { DecoBreak } from 'components/Break'
import { Category } from 'types'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import { OverviewBase } from 'components/OverviewBase'
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
        [<ImageBlock src={Murder5} alt="" />, 3],
        [<ImageBlock src={Murder1} alt="" />, 9],
        [<DecoBreak />, 12],
        [
          <Post title="Popularity of Murder in Broadsides">
            <ClickableImage src={MurderPopularity} />
          </Post>,
          8,
        ],
        [<ImageBlock src={Murder2} alt="" />, 4],
        [<ImageBlock src={Castle} alt="" />, 5],
        [<ImageBlock src={Murder3} alt="" />, 7],
      ]}
    />
  )
}
