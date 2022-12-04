import { T, Grid, Box } from 'MUI'
import { Page } from 'layouts/Page'
import { Row, ThenAndNow } from './Row'
import Now1 from './images/now1.jpeg'
import Now2 from './images/now2.jpeg'
import Now3 from './images/now3.jpeg'
import Now4 from './images/now4.jpeg'
import Now5 from './images/now5.jpeg'
import Now6 from './images/now6.jpeg'
import Now7 from './images/now7.jpeg'
import Then1 from './images/then1.jpeg'
import Then2 from './images/then2.jpeg'
import Then3 from './images/then3.jpeg'
import Then4 from './images/then4.jpeg'
import Then5 from './images/then5.jpeg'
import Then6 from './images/then6.jpeg'
import Then7 from './images/then7.jpeg'

export const Now = () => {
  return (
    <>
      <Page title="Broadsides Then and Now">
        <Box component="p" sx={{ marginBottom: 6 }}>
          For over 300 years, the public relied on street literature to find out
          what was going on, the most popular form of which was the 'Broadside'-
          the tabloid of the day. Over time, Broadsides have evolved into
          newspapers, which then onto the internet and today's social media. The
          following but are people so different between then and now? Many of
          the topics of yore mirror what's popular today as well.
        </Box>

        <Grid container spacing={{ xs: 1, md: 4 }} sx={{ overflowY: 'hidden' }}>
          <ThenAndNow />
          <Row title="Medium" left={Then1} leftAlt="" right={Now1} rightAlt="">
            Nowadays, people are more likely to find their news on mobile apps
            and social media. Despite this, the shape of the new page has not
            changed much, only now it's pixels instead of ink.
          </Row>

          <Row
            title="Aesthetics"
            left={Then2}
            leftAlt=""
            right={Now2}
            rightAlt=""
          >
            Early Broadsides were usually printed in black ink, with later ones
            sometimes using two colors. The rare illustration were usually cheap
            woodblock prints used over and over, even the broadside bore no
            relation to the picture. However, news aesthetics in the digital age
            has undergone major changes. With the change in technology, people
            have come to expect colorful information, engaging typography,
            pictures, video, and integrated social media.
          </Row>
          <Row
            title="Information"
            left={Then3}
            leftAlt=""
            right={Now3}
            rightAlt=""
          >
            Publication of non-factual news stories or 'fake news' is a
            phenomenon with a long history. However, in many Broadsides the
            'fake news' are clearly jokes and parodies, unlike modern social
            media where fake news stories are more widespread and harder to
            distinguish from truth.
          </Row>
        </Grid>

        <Box sx={{ marginTop: 12, marginBottom: 8 }}>
          <T variant="h1" component="h2">
            Themes Then and Now
          </T>
          <p>
            The key themes from the Broadsides, were murder, trials, love, and
            songs. These themes reflect the interests of the people at the time
            and show that as a society the things that peak our interests have
            not changed too much over the past 400 years:
          </p>
        </Box>

        <Grid container spacing={4} sx={{ overflowY: 'hidden' }}>
          <ThenAndNow />
          <Row title="Murder" left={Then4} leftAlt="" right={Now4} rightAlt="">
            The most talked about topic throughout the Broadsides was murder.
            Not only were they obsessed with it, but it was also a much more
            common artefact in their lifestyle. Additionally, especially in the
            earlier years of this dataset, and not nearly as frowned upon as it
            is today. Having said that, people of today are not very different.
            We obsess over serial killers, reflected in the viewer ratings of
            the latest Netflix documentary, or the popularity of the most recent
            true crime podcast.
          </Row>
          <Row title="Trial" left={Then5} leftAlt="" right={Now5} rightAlt="">
            Trials were another hot topic in the Broadsides, this is
            unsurprising due to their intrinsic link to murder. Trials occurred
            for all matter of sins, often ending in execution or transportation
            to foreign lands. Although modern day trials in Scotland are fairer
            and carry sentences that are less life-threatening, big trials are
            still documented by the media with utmost scrutiny (eg. Johnny Depp
            v. Amber Heard).
          </Row>
          <Row
            title="Love and Courtship"
            left={Then6}
            leftAlt=""
            right={Now6}
            rightAlt=""
          >
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
          </Row>
          <Row
            title="Songs and Poems"
            left={Then7}
            leftAlt=""
            right={Now7}
            rightAlt=""
          >
            Songs and poems are timeless, but what also has not changed over the
            past 400 years is the use of songs and poems to not only share
            messages of romance, but also to share important messages throughout
            the community. At the time of the Broadsides, not everyone would
            have been literate so important messages would have to be shared by
            word of mouth, and we all know that a song is much more likely to
            get stuck in our heads! We found Broadsides in our collection
            containing songs about both Cholera and Cholic, and we cannot ignore
            the similarities that these have with modern day viral dance videos
            being used to spread messages about topics such as Covid on social
            media.
          </Row>
        </Grid>
      </Page>
    </>
  )
}
