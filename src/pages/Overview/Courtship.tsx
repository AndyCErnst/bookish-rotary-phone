import { useParams } from 'react-router-dom'
import { Post } from 'components/Post'
import { Category } from 'types'
import { ImageBlock } from 'components/Block'
import { FlourishBreak } from 'components/Break'
import { BroadsidesOfDay } from './BroadsidesOfDay'
import { OverviewBase } from 'components/OverviewBase'
import { ClickableImage } from 'components/ClickableImage'
import Courtship1 from 'images/deco/courtship/74407740.3.jpg'
import Courtship2 from 'images/deco/courtship/74411271.3.jpg'
import Courtship3 from 'images/deco/courtship/74414359.3.jpg'
import Courtship4 from 'images/deco/courtship/74414467.3.jpg'
import Courtship5 from 'images/deco/courtship/74417183.3.jpg'
import CourtLoc from 'images/viz/Courtship-Locations Plot.png'
import CourtWords from 'images/viz/Love_Words.png'

export const Courtship = () => {
  const params = useParams<{ topic: Category }>()
  return (
    <OverviewBase
      title="Love and Courtship"
      sections={[
        [
          <Post>
            Courtship and love in the time period of the Scottish broadsides is
            an interesting topic to explore further. Courtship and love was
            written about in a variety of ways, including songs, such as
            romantic love letters; humour, such as silly lover letters; and
            crimes of passion, which were written about in the context of murder
            and trials. Below are some summary visualisations that show where in
            Scotland courtship was written about, what words were commonly used
            before love and the topics that were written about in broadsides
            about courtship.
          </Post>,
          12,
        ],
        [
          <Post>
            <ClickableImage src={CourtLoc} />
          </Post>,
          6,
        ],
        [
          <Post>
            <ClickableImage src={CourtWords} />
          </Post>,
          6,
        ],
        [<BroadsidesOfDay topic={params.topic!} />, 4],
        [<FlourishBreak />, 12],
        [<ImageBlock src={Courtship1} alt="" />, 4],
        [<ImageBlock src={Courtship2} alt="" />, 4],
        [<ImageBlock src={Courtship3} alt="" />, 4],
        [<ImageBlock src={Courtship4} alt="" />, 4],
        [<ImageBlock src={Courtship5} alt="" />, 4],
      ]}
    />
  )
}
