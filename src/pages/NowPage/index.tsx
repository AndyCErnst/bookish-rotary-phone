import { Stack } from 'MUI'
import { Post } from 'components/Post'
import { OverviewBase } from 'components/OverviewBase'
import { ClickableImage } from 'components/ClickableImage'
import { Vote } from 'components/Vote'
import Love from 'images/now/LoveandCourtship_ModernDay.jpeg'
import Murder from 'images/now/Murder_ModernDay.jpeg'
import SongsBs from 'images/now/SongsAndPoems_Broadside.jpg'
import Songs from 'images/now/SongsandPoems_ModernDay.jpg'
import Trials from 'images/now/Trials_ModernDay.png'

export const Now = () => {
  return (
    <OverviewBase
      title="What About Now?"
      sections={[
        [
          <Post>
            Broadsides became less popular over time in favour of other news
            sources such as the modern broadsheet newspaper. Recently, people
            are more likely to obtain news via mobile apps and social media.
            Despite this, the format in which news stories are displayed has not
            changed a huge amount, apart from the switch from paper to screen.
            Shocking titles and eye-catching images are still used to attract
            the reader's attention. Additionally, publication of non-factual
            news stories or 'fake news' is a phenomenon that has remained
            throughout history. However, in the Broadsides these exist as
            obvious jokes or parodies, compared to social media where fake news
            stories are much more widespread and harder to differentiate from
            the truth.
            <br />
            <br />
            The key themes that we picked out from the Broadsides,
            reflecting the interests of the people at the time, show that as a
            society the things that peak our interests have not changed too much
            over the past 400 years:
          </Post>,
          12,
        ],
        [
          <Post title="Murder">
            The most talked about topic throughout the Broadsides was murder.
            Not only were they obsessed with it, but it was also a much more
            common artefact in their lifestyle. Additionally, especially in the
            earlier years of this dataset, and not nearly as frowned upon as it
            is today. Having said that, people of today are not very different.
            We obsess over serial killers, reflected in the viewer ratings of
            the latest Netflix documentary, or the popularity of the most recent
            true crime podcast.
          </Post>,
          8,
        ],
        [<ClickableImage src={Murder} />, 4],
        [<ClickableImage src={Trials} />, 4],
        [
          <Post title="Trials">
            Trials were another hot topic in the Broadsides, this is
            unsurprising due to their intrinsic link to murder. Trials occurred
            for all matter of sins, often ending in execution or transportation
            to foreign lands. Although modern day trials in Scotland are fairer
            and carry sentences that are less life-threatening, big trials are
            still documented by the media with utmost scrutiny (cue 'Wagatha
            Christie').
          </Post>,
          8,
        ],
        [
          <Post title="Love and Courtship">
            Broadsides included love letters and wedding announcements, as well
            as details of murderous lovers and affairs. As they were written and
            published more locally than today's global news platforms the reader
            would likely know of the protagonists, making the articles akin to a
            magazine's gossip column. Their interest in gossip and other
            people's affairs is another facet of society that has been retained
            over the years. Modern television is inundated with an endless
            amount of dating shows, from 'Love Island' to 'First Dates'. And,
            although people from the 1700s might not be bothered by the concept
            of 'Married at First Sight', I am sure that they would be more than
            a little taken aback at the prospect of 'Naked Attraction'.
          </Post>,
          8,
        ],
        [<ClickableImage src={Love} />, 4],
        [
          <Stack>
            <ClickableImage src={SongsBs} />
            <ClickableImage src={Songs} />
          </Stack>,
          4,
        ],
        [
          <Post title="Songs and Poems">
            Songs and poems are of course timeless, but what also has not
            changed over the past 400 years is the use of songs and poems to not
            only share messages of romance, but also to share important messages
            throughout the community. At the time of the Broadsides, not
            everyone would have been literate, and therefore important messages
            would have to be communicated by word of mouth, and we all know that
            a song is much more likely to get stuck in our heads! We found
            Broadsides in our collection containing songs about both Cholera and
            Cholic, and we cannot ignore the similarities that these have with
            modern day viral dance videos being used to spread messages about
            topics such as Covid on social media..
          </Post>,
          8,
        ],
      ]}
    />
  )
}
