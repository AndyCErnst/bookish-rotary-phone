import { Stack } from 'MUI'
import { BroadsideImage } from 'components/Image'
import { ClickableImage } from 'components/ClickableImage'
import { Page } from 'layouts/Page'
import PerYear from 'images/viz/BroadsidesBasics_No._broadsides_per_year.png'
import Places from 'images/viz/BroadsideBasics_CommonPlaces.png'
import Topics from 'images/viz/BroadsideBasics_Topics.png'
import { Comic } from './Comic/Comic'

export const AboutBroadsides = () => {
  return (
    <Page title="About Scottish Broadsides">
      <Stack spacing={4}>
        <p>
          Broadsides are single sided newspaper sheets posted in public places
          and sold by street vendors. They were and early version of the tabloid
          press. Broadsides first printed official notices and royal
          proclamations but later, the Broadsides became an early form of
          popular culture, by printing songs, gallows speeches and
          sensationalised crime.
        </p>
        <div>
          <h2>The Life of a Broadside</h2>

          <p>
            In the following data comic, see the life of the Broadsides from
            1650 to 1910. See how Broadsides' topics changed from official
            notices and royal proclamations, ballads, stories of execution and
            murder, to sensationalized novels. Finally, Broadsides evolved into
            our current newspaper.
          </p>
        </div>
        <Comic />

        <div>
          <h2>When Were They Reading It?</h2>
          <ClickableImage src={PerYear} />
        </div>
        
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          marginTop={4}
        >
          <div>
            <h2>What Were They Reading?</h2>
            <ClickableImage src={Topics} />
          </div>
          <div>
            <h2>Where Were They Reading it?</h2>
            <ClickableImage src={Places} />
          </div>
        </Stack>
      </Stack>
    </Page>
  )
}
