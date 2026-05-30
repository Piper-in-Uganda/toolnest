import { ToolPageLayout } from '@/components/ui/tool-page-layout'
import { CaseConverterSeoContent } from './case-converter-seo-content'
import { CaseConverterTool } from './case-converter-tool'

export default function CaseConverterPage() {
  return (
    <ToolPageLayout
      title="Case Converter"
      description="Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and kebab-case in real time."
      contentClassName="mx-auto max-w-3xl"
    >
      <CaseConverterTool />
      <CaseConverterSeoContent />
    </ToolPageLayout>
  )
}
