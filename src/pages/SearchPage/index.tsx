import { useState } from 'react'
import { Stack, TextField } from 'MUI'
import { broadsidesList } from 'data'
import { ArticleList } from 'components/ArticleList'
import { ResultsNumber } from 'components/ResultsNumber'
import './Search.css'

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const lowerSearch = searchTerm.toLowerCase()
  
  const matching = broadsidesList.filter(
    (bs) =>
      bs.text.toLowerCase().includes(lowerSearch) ||
      bs.title.toLowerCase().includes(lowerSearch)
  )

  return (
    <article className="SearchPage">
      <Stack spacing={2} padding={4}>
        <h1>Search</h1>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ResultsNumber matching={matching} />
        <ArticleList articles={matching} />
      </Stack>
    </article>
  )
}
