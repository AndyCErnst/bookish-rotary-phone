import { Topic } from 'components/TopicSections'
import { Page } from 'layouts/Page'

interface OverviewBaseProps {
  title: string
  sections: React.ComponentProps<typeof Topic>['sections']
}

export const OverviewBase = ({ title, sections }: OverviewBaseProps) => {
  return (
    <Page title={title}>
      <Topic sections={sections} />
    </Page>
  )
}
