import { BroadsideImage } from 'components/Image'
import { ClickableImage } from 'components/ClickableImage'
import { Post } from 'components/Post'
import { OverviewBase } from 'components/OverviewBase'
import PerYear from 'images/viz/BroadsidesBasics_No._broadsides_per_year.png'
import Places from 'images/viz/BroadsideBasics_CommonPlaces.png'
import Topics from 'images/viz/BroadsideBasics_Topics.png'

export const AboutBroadsides = () => {
  return (
    <OverviewBase
      title="About Scottish Broadsides"
      sections={[
        [
          <Post>
            Broadsides are single sided newspaper sheets posted in public places
            and sold by street vendors. They were and early version of the
            tabloid press. Broadsides first printed official notices and royal
            proclamations but later, the broadsides became an early form of
            popular culture, by printing songs, gallows speeches and
            sensationalised crime.
          </Post>,
          12,
        ],
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
