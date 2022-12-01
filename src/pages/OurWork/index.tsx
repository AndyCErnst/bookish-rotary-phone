import { Post } from 'components/Post'
import Flowchart from 'images/Behind the Headlines.png'
import { OverviewBase } from 'components/OverviewBase'
import { NullBlock} from 'components/Block'

export const OurWork = () => {
  return (
    <OverviewBase
      title=" Behind the Headlines"
      sections={[
        [
          <Post>
            This website is the product of a huge amount of work by our team. We
            are a group of postgraduate students at the University of Edinburgh:
            Andy Ernst, Grace Forsyth, Francesca Hearn-Yeates, Siwei Zhu, and
            Loryn Sun.
            <br />
            <br />
            The Broadsides dataset was provided to us as a collection of XML
            files and scanned images. We have converted, processed, and analysed
            this dataset to create a searchable and explorable website allowing
            this fascinating piece of Scottish history to become accessible to a
            wide audience.
            <br />
            <br />
            The flow diagram below details our developmental process:
          </Post>,
          12,
        ],
        [<NullBlock />, 1],
        [
          <Post title="Process">
            <img src={Flowchart} alt="" />
          </Post>,
          10,
        ],
      ]}
    />
  )
}
