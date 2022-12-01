import { Button, Stack, Grid, Box } from 'MUI'
import { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Block, ColoredBlock, NullBlock, ImageBlock } from './Block'
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
      [<NullBlock />, 9],
      [<ColoredBlock color="tan" content="1650-1910" />, 3],
      [<NullBlock />, 12],
      [<NullBlock />, 12],
      [<NullBlock />, 3],
      [<Link to="/summary"><ColoredBlock color="white" content={"Brief Introduction"} darkText /></Link>, 9],
      [<ImageBlock src={Song} alt="Ink printing of man playing bagpipes" />, 3],
      [<Link to="/topic/courtship"><ColoredBlock color="tan" content={"Courtship"} /></Link>, 3],
      [<NullBlock />, 6],
      [<Link to="/topic/songs and poems"><ColoredBlock color="coffee" content={"Songs"} /></Link>, 3],
      [<NullBlock />, 3],
      [<ImageBlock src={Ballad} alt="Drawing of a poor victorian man holding a newspaper" color="oldpaper" />, 3],
      [<ImageBlock src={Courtship} alt="Monochromatic ink printing of a victorian woman" />, 3],
      [<MapImage />, 9], //   need to style this down in size 
      [<NullBlock />, 3],
      [<NullBlock />, 3],
      [<ImageBlock src={Hanging1} alt="Monochromatic ink printing of hanged woman" />, 3],
      [<Link to="/topic/murder"><ColoredBlock color="coffee" content={"Murder"} /></Link>, 3],
      [<ImageBlock src={Assault} alt="Monochromatic ink printing of a victorian man assaulting a woman in a field" />, 3],
      [<Link to="/topic/trials"><ColoredBlock color="oldpaper" content={"Trials"} darkText /></Link>, 3],
      [<ImageBlock src={Hanging2} alt="Monochromatic ink printing of a crowd gathered around a hanging" />, 6],
      [<NullBlock />, 9],
      [<Link to="/now"><ColoredBlock color="rust" content={"What about now?"} /></Link>, 3],
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

