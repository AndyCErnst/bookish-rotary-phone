import { Button, Stack, T } from 'MUI'
import { Topic } from 'components/TopicSections'
import { Image } from 'components/Image'
import { Post } from 'components/Post'
import './OverviewBase.css'

interface OverviewBaseProps {
    title: string
    sections: React.ComponentProps<typeof Topic>["sections"]
}

export const OverviewBase = ({title, sections}: OverviewBaseProps) => {
    return (
        <article>
            <T variant="h3" component="h1" className='overviewTitle'>{title}</T>
            <Topic sections={sections} />
        </article>
    )
}