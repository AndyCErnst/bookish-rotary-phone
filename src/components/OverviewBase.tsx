import { Box } from 'MUI'
import { Topic } from 'components/TopicSections'

interface OverviewBaseProps {
    title: string
    sections: React.ComponentProps<typeof Topic>["sections"]
}

export const OverviewBase = ({title, sections}: OverviewBaseProps) => {
    return (
        <article>
            <Box sx={{ textAlign: 'center'}}>
            <h1 >{title}</h1>
            </Box>
            <Topic sections={sections} />
        </article>
    )
}