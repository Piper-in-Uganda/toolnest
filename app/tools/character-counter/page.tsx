import { ToolPageLayout } from '@/components/ui/tool-page-layout'
import { CharacterCounterSeoContent } from './character-counter-seo-content'
import { CharacterCounterTool } from './character-counter-tool'

export default function CharacterCounterPage() {
  return (
    <ToolPageLayout
      title="Character Counter"
      description="Count characters with or without spaces, letters, words, sentences, paragraphs, and lines in real time."
      contentClassName="mx-auto max-w-3xl"
    >
      <CharacterCounterTool />
      <CharacterCounterSeoContent />
    </ToolPageLayout>
  )
}
