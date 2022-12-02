import { T, Stack, Grid, Box } from 'MUI'
import { ReactNode } from 'react'
import {
  TitleBlock,
  ColoredBlock,
  NullBlock,
  ImageBlock,
} from 'components/Block'
import { colors } from 'utils/color'
import Song from 'images/song.png'
import Ballad from 'images/ballads.png'
import Courtship from 'images/courtship.png'
import Hanging1 from 'images/hanging.png'
import Hanging2 from 'images/hanging2.png'
import Assault from 'images/assault.png'
import Newspaper from 'images/modern newspaper.png'
import { MapImage } from './MapImage'
import './index.css'

export const LandingPage = () => {
  const sections: [ReactNode, number][] = [
    [<NullBlock />, 6],
    [
      <ColoredBlock color="white" darkText>
        <T
          variant="h2"
          component={Stack}
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100%', color: colors.rust }}
        >
          <Box sx={{ fontSize: '50px' }}>1,726</Box>
          Broadsides
        </T>
      </ColoredBlock>,
      3,
    ],
    [
      <ColoredBlock color="leather">
        <T
          variant="h2"
          component={Stack}
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100%', fontSize: '70px', textAlign: 'center' }}
        >
          1650-
          1910
        </T>
      </ColoredBlock>,
      3,
    ],
    [<NullBlock />, 12],
    [<NullBlock />, 12],
    [<NullBlock />, 3],
    [
      <TitleBlock
        to="/summary"
        color="white"
        title={'What are the Scottish Broadsides?'}
        darkText
      >
        Broadsides are single sided newspaper sheets posted in public places and
        sold by street vendors. They were and early version of the tabloid
        press. Broadsides first printed official notices and royal proclamations
        but later, the broadsides became an early form of popular culture, by
        printing songs, gallows speeches and sensationalised crime.
      </TitleBlock>,
      9,
    ],
    [<ImageBlock src={Song} alt="Ink printing of man playing bagpipes" />, 3],
    [<TitleBlock to="/topic/courtship" color="tan" title={'Courtship'} />, 3],
    [<NullBlock />, 6],
    [
      <TitleBlock to="/topic/songs and poems" color="coffee" title={'Songs'} />,
      3,
    ],
    [<NullBlock />, 3],
    [
      <ImageBlock
        src={Ballad}
        alt="Drawing of a poor victorian man holding a newspaper"
        color="oldpaper"
      />,
      3,
    ],
    [
      <ImageBlock
        src={Courtship}
        alt="Monochromatic ink printing of a victorian woman"
      />,
      3,
    ],
    [<MapImage />, 9], //   need to style this down in size
    [<NullBlock />, 3],
    [<NullBlock />, 3],
    [
      <ImageBlock
        src={Hanging1}
        alt="Monochromatic ink printing of hanged woman"
      />,
      3,
    ],
    [<TitleBlock to="/topic/murder" color="coffee" title={'Murder'} />, 3],
    [
      <ImageBlock
        src={Assault}
        alt="Monochromatic ink printing of a victorian man assaulting a woman in a field"
      />,
      3,
    ],
    [
      <TitleBlock
        to="/topic/trials"
        color="oldpaper"
        title={'Trials'}
        darkText
      />,
      3,
    ],
    [
      <ImageBlock
        src={Hanging2}
        alt="Monochromatic ink printing of a crowd gathered around a hanging"
      />,
      6,
    ],
    [<NullBlock />, 9],
    [<TitleBlock to="/now" color="rust" title={'What about now?'} />, 3],
    [<NullBlock />, 9],
    [<ImageBlock src={Newspaper} alt="A modern newspaper" />, 3],
  ]
  return (
    <article className="LandingPage">
      <Grid container>
        {sections.map(([el, size], i) => (
          <Grid key={i} xs={size}>
            {el}
          </Grid>
        ))}
      </Grid>
    </article>
  )
}
