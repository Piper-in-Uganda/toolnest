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
import { defaultExampleText, removeEmptyLines } from '@/lib/remove-empty-lines'

export default function RemoveEmptyLinesPage() {
  const [text, setText] = useState(defaultExampleText)
  const [copied, setCopied] = useState(false)

  const processed = useMemo(() => removeEmptyLines(text), [text])

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
      title="Remove Empty Lines"
      description="Paste your text to strip blank and whitespace-only lines instantly while keeping the original order of every remaining line."
    >
      <section aria-label="Remove empty lines tool" className="space-y-5">
        <div>
          <SectionTitle
            title="Input (with empty lines)"
            htmlFor="empty-lines-input"
            hint="Blank lines and lines that contain only spaces or tabs are removed."
          />
          <textarea
            id="empty-lines-input"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder={'Line one\n\nLine two\n   \nLine three'}
            className={toolTextareaClassName}
          />
        </div>

        <StatsGrid columns={3} ariaLabel="Line statistics">
          <StatsCard label="Total Lines" value={processed.totalLines} />
          <StatsCard label="Remaining Lines" value={processed.remainingLines} />
          <StatsCard label="Removed Empty Lines" value={processed.removedCount} />
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
          <SectionTitle title="Result (empty lines removed)" htmlFor="empty-lines-output" />
          <textarea
            id="empty-lines-output"
            value={processed.result}
            readOnly
            placeholder={'First line\nSecond line\nThird line'}
            aria-label="Text with empty lines removed"
            className={toolTextareaMutedClassName}
          />
        </div>
      </section>
    </ToolPageLayout>
  )
}
