import { Stack, DialogTitle, Dialog } from 'MUI'
import { useParams } from 'react-router-dom'
import { broadsides } from 'data'
import { ClickableImage } from 'components/ClickableImage'
import { Vote } from 'components/Vote'
import { ErrorPage } from 'pages/ErrorPage/ErrorPage'
import { Page } from 'layouts/Page'
import './BroadsideView.css'

export const BroadsideView = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <ErrorPage />
  }
  const { title, text, year, categories, image } = broadsides[id]

  return (
    <Page title={title} smallHeading>
      <Stack direction="row" spacing="2" justifyContent={'space-between'}>
        <div>
          <strong>{year}</strong>
          <br />
          {categories.length ? (
            <strong>
              Topic - {categories.join(' ')}
              <br />
            </strong>
          ) : null}
        </div>
        <Vote id={id} />
      </Stack>
      <Stack direction="row" className="Broadside__container" spacing={2}>
        <div className="Broadside__body">{text}</div>
        <div className="imageContainer">
          <ClickableImage
            name={'broadsides/' + image}
            alt={`Broadside titled ${title}`}
          />
        </div>
      </Stack>
    </Page>
  )
}
