import { Paper, Stack } from 'MUI'
import './Post.css'

export const Post = ({ children, title }: { children: React.ReactNode, title?: string }) => {
    return (
      <Paper square>
        <Stack sx={{ padding: 2 }} spacing={2}>{title ? <h2 className='PostTitle'>{title}</h2> : null}{children}</Stack>
      </Paper>
    )
  }
  