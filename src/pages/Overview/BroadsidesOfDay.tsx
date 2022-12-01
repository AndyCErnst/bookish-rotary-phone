import { T } from 'MUI'
import { Category } from 'types'
import { Post } from 'components/Post'
import { ArticleList } from 'components/ArticleList'
import { getStableRandomBroadsides } from 'utils/randomGenerator'

// this isn't filtering by category atm
export const BroadsidesOfDay = ({ topic }: { topic: Category }) => {
  const broads = getStableRandomBroadsides()

  return (
    <Post>
      <h2>Broadsides of the Day</h2>
      <ArticleList
        articles={broads}
      />
    </Post>
  )
}
