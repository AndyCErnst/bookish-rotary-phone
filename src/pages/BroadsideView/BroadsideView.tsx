import { Stack, DialogTitle, Dialog } from 'MUI'
import { useParams } from 'react-router-dom'
import { broadsides } from 'data'
import { ClickableImage } from 'components/ClickableImage'
import { Vote } from 'components/Vote'
import { ErrorPage } from 'pages/ErrorPage/ErrorPage'
import './BroadsideView.css'

export const BroadsideView = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <ErrorPage />
  }
  const { title, text, year, categories, image } = broadsides[id]

  return (
    <article className="Broadside">
      <h2>{title}</h2>
      <Stack direction="row" spacing="2" justifyContent={"space-between"}>
        <div>
          <strong>{year}</strong>
          <br />
          {categories ? (
            <strong>
              Topic - {categories.join(' ')}
              <br />
            </strong>
          ) : null}
        </div>
        <Vote />
      </Stack>
      <Stack direction="row" className="Broadside__container" spacing={2}>
        <div className="Broadside__body">{text}</div>
        <div className="imageContainer">
          <ClickableImage name={'broadsides/'+image} alt={`Broadside titled ${title}`} />
        </div>
      </Stack>
    </article>
  )
}
