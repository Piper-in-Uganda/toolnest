import { ToolPageLayout } from '@/components/ui/tool-page-layout'
import { WordCounterSeoContent } from './word-counter-seo-content'
import { WordCounterTool } from './word-counter-tool'

export default function WordCounterPage() {
  return (
    <ToolPageLayout
      title="Smart Word Counter"
      description="Paste or type your content and instantly see word, character, and sentence counts with an estimated reading time."
      contentClassName="mx-auto max-w-3xl"
    >
      <WordCounterTool />
      <WordCounterSeoContent />
    </ToolPageLayout>
  )
}
