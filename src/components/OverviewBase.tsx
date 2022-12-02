import { Box, T } from 'MUI'
import { Topic } from 'components/TopicSections'

interface OverviewBaseProps {
    title: string
    sections: React.ComponentProps<typeof Topic>["sections"]
}

export const OverviewBase = ({title, sections}: OverviewBaseProps) => {
    return (
        <article>
            <Box sx={{ textAlign: 'center'}}>
            <T variant="h1">{title}</T>
            </Box>
            <Topic sections={sections} />
        </article>
    )
}