import { Grid, Box } from 'MUI'
import { colors } from 'utils/color'
import Arrow from 'images/icons/arrow.svg'
import { Page } from 'layouts/Page'
import NLSLogo from 'images/nls logo dark.png'

export const OurWork = () => {
  return (
    <Page title="Behind the Headlines">
      <p>
        This website is the product of a huge amount of work by our team. We are
        a group of postgraduate students at the University of Edinburgh: Andy
        Ernst, Grace Forsyth, Francesca Hearn-Yeates, Siwei Zhu, and Loryn Sun.
        <br />
        <a href="https://data.nls.uk/data/digitised-collections/broadsides-printed-in-scotland/">
        <Box sx={{ py: 2, textAlign: 'center'}}>
          <img src={NLSLogo} alt={'the National Museum of Scotland'} />
          </Box>
        </a>
        <a href="https://data.nls.uk/data/digitised-collections/broadsides-printed-in-scotland/">
          The National Library of Scotland
        </a>{' '}
        provided the Broadsides dataset to us as a collection of XML files and
        scanned images. We have converted, processed, and analysed this dataset
        to create a searchable and explorable website allowing this fascinating
        piece of Scottish history to become accessible to a wide audience.
        <br />
        <br />
        The flow diagram below details our developmental process:
      </p>
      <Box sx={{ py: 4, marginTop: 2 }}>
        <Grid container columnSpacing={4} rowSpacing={2}>
          <Step
            step="Natural Language Processing (NLP) of text"
            description="The original Broadsides files were scanned and digitised using OCR. These text files were our primary dataset. We used NLP to analyse the content of the text, such as frequency of words and locations."
          />
          <ConnectingArrow />
          <Step
            step="Conversion of XML files to CSV"
            description="The metadata of our text files, such as publication year and location, existed in XML format. We wrote the code to convert the metadata to a CSV to make the analysis easier later on."
          />
          <ConnectingArrow />
          <Step
            step="Cleaning the metadata"
            description="The metadata CSV file contained a number of errors, such as punctuation and spelling mistakes, which occurred during the OCR processing. These were removed and replaced to improve the analysis."
          />
          <ConnectingArrow />
          <Step
            step="Extracting the themes"
            description="Through our analysis of the text we found four key themes: murder, trials, courtship, and songs and poems. We investigated these topics further to see how they varied throughout the Broadsides.  "
          />
          <ConnectingArrow />
          <Step
            step="Coding the website"
            description="We built a single page web application using React and Typescript. The map uses Leaflet with broadside locations geolocated using Google Maps and is deployed via Netlify."
          />
          <ConnectingArrow />
          <Step
            step="Designing website aesthetics"
            description="Due to the period of broadsides, we designed the website by combining the old fashion style and newspapers. We created the introductory cartoon using Figma, Photoshop and Adobe Illustrator."
          />
          <ConnectingArrow />
          <Step
            step="Writing text to describe & explain findings"
            description="Finally, the website was completed by writing descriptions of the themes and the visualisations to summarise our findings and clarify the messages that we want to share."
          />
        </Grid>
      </Box>
    </Page>
  )
}

const ConnectingArrow = () => {
  return (
    <>
      <Grid sm={4} justifyContent="center" sx={{ display: 'flex' }}>
        <Box component={'img'} src={Arrow} />
      </Grid>
      <Grid sm={8} />
    </>
  )
}

const Step = ({ step, description }: { step: string; description: string }) => {
  const sharedStyles = {
    border: '2px solid ' + colors.coffee,
    padding: 3,
    boxSizing: 'border-box',
    height: '100%',
  }
  return (
    <>
      <Grid sm={4}>
        <Box
          sx={{
            ...sharedStyles,
            backgroundColor: colors.white,
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {step}
        </Box>
      </Grid>
      <Grid sm={8}>
        <Box sx={{ ...sharedStyles }}>{description}</Box>
      </Grid>
    </>
  )
}
