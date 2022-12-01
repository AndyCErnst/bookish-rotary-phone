import { T } from 'MUI'
import { Topic } from 'components/TopicSections'

interface OverviewBaseProps {
    title: string
    sections: React.ComponentProps<typeof Topic>["sections"]
}

export const OverviewBase = ({title, sections}: OverviewBaseProps) => {
    return (
        <article>
            <T variant="h3" component="h1" sx={{marginBottom: 3}}>{title}</T>
            <Topic sections={sections} />
        </article>
    )
}