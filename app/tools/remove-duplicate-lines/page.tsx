'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/ui/section-title'
import { StatsCard } from '@/components/ui/stats-card'
import { StatsGrid } from '@/components/ui/stats-grid'
import {
  ToolPageLayout,
  toolTextareaClassName,
  toolTextareaMutedClassName,
} from '@/components/ui/tool-page-layout'
import { defaultExampleText, removeDuplicateLines } from '@/lib/remove-duplicate-lines'

export default function RemoveDuplicateLinesPage() {
  const [text, setText] = useState(defaultExampleText)
  const [copied, setCopied] = useState(false)

  const processed = useMemo(() => removeDuplicateLines(text), [text])

  async function handleCopy() {
    if (!processed.result) {
      return
    }

    try {
      await navigator.clipboard.writeText(processed.result)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  function handleClear() {
    setText('')
    setCopied(false)
  }

  return (
    <ToolPageLayout
      title="Remove Duplicate Lines"
      description="Each line is checked for exact duplicates. Repeated lines are removed while the first occurrence keeps its place — try the sample below to see it in action."
    >
      <section aria-label="Remove duplicate lines tool" className="space-y-5">
        <div>
          <SectionTitle
            title="Input (with duplicate lines)"
            htmlFor="duplicate-lines-input"
            hint="Example: apple and banana each appear twice — only the first copy is kept."
          />
          <textarea
            id="duplicate-lines-input"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder={'apple\nbanana\napple\ncat\nbanana'}
            className={toolTextareaClassName}
          />
        </div>

        <StatsGrid columns={3} ariaLabel="Line statistics">
          <StatsCard label="Total Lines" value={processed.totalLines} />
          <StatsCard label="Unique Lines" value={processed.uniqueLines} />
          <StatsCard label="Removed Duplicates" value={processed.removedCount} />
        </StatsGrid>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="primary" fullWidth onClick={handleCopy} disabled={!processed.result}>
            {copied ? 'Copied!' : 'Copy Result'}
          </Button>
          <Button variant="secondary" fullWidth onClick={handleClear}>
            Clear
          </Button>
        </div>

        <div>
          <SectionTitle
            title="Result (duplicates removed)"
            htmlFor="duplicate-lines-output"
          />
          <textarea
            id="duplicate-lines-output"
            value={processed.result}
            readOnly
            placeholder={'apple\nbanana\ncat'}
            aria-label="Deduplicated result"
            className={toolTextareaMutedClassName}
          />
        </div>
      </section>
    </ToolPageLayout>
  )
}
