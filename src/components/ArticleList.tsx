import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pagination, Box } from 'MUI'
import './ArticleList.css'

export type Article = {
  title: string
  id: number
}

const PAGINATION_SIZE = 20
export const ArticleList = ({ articles }: { articles: Article[] }) => {
  const [page, setPage] = useState(1)

  // Reset pagination when receiving a new list of articles
  useEffect(() => {
    setPage(1)
  }, [articles])

  return (
    <div>
      <ul className="ArticleList">
        {articles.slice((page-1)*PAGINATION_SIZE, page*PAGINATION_SIZE).map((article: Article) => (
          <li key={article.id}>
            <Link to={`/broadsides/${article.id}`} className="ArticleLink" >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      <Box sx={{marginTop: 3}}>
      {articles.length > 20 ? (
        <Pagination
          size="large"
          count={Math.ceil(articles.length / PAGINATION_SIZE)}
          page={page}
          onChange={(_, val) => setPage(val)}
        />
      ) : null}
      </Box>
    </div>
  )
}
