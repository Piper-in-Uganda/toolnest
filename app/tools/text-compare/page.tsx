'use client'

import { useMemo, useState } from 'react'
import { SectionTitle } from '@/components/ui/section-title'
import { StatsCard } from '@/components/ui/stats-card'
import { StatsGrid } from '@/components/ui/stats-grid'
import { ToolPageLayout, toolTextareaClassName } from '@/components/ui/tool-page-layout'
import { compareTexts, type DiffSegment } from '@/lib/text-diff'

export default function TextComparePage() {
  const [leftText, setLeftText] = useState('')
  const [rightText, setRightText] = useState('')

  const comparison = useMemo(() => compareTexts(leftText, rightText), [leftText, rightText])

  return (
    <ToolPageLayout
      title="Text Compare"
      description="Compare two texts side by side with live diff highlighting and similarity metrics."
      maxWidth="6xl"
      contentClassName="space-y-6"
    >
      <section aria-label="Comparison statistics">
        <StatsGrid columns={3} ariaLabel="Comparison statistics">
          <StatsCard label="Character Difference" value={comparison.characterDifference} />
          <StatsCard label="Word Difference" value={comparison.wordDifference} />
          <StatsCard label="Similarity" value={`${comparison.similarityPercent}%`} />
        </StatsGrid>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2" aria-label="Text comparison panels">
        <ComparePanel
          label="Text A"
          value={leftText}
          onChange={setLeftText}
          placeholder="Paste or type the first text..."
          segments={comparison.leftSegments}
        />
        <ComparePanel
          label="Text B"
          value={rightText}
          onChange={setRightText}
          placeholder="Paste or type the second text..."
          segments={comparison.rightSegments}
        />
      </section>
    </ToolPageLayout>
  )
}

type ComparePanelProps = {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  segments: DiffSegment[]
}

function ComparePanel({ label, value, onChange, placeholder, segments }: ComparePanelProps) {
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle title={label} />
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={label}
        className={`${toolTextareaClassName} h-56 lg:h-64`}
      />
      <div className="min-h-56 rounded-xl border border-slate-200 bg-slate-50 p-4 text-base leading-7 text-slate-900 lg:min-h-64">
        <SectionTitle title="Highlighted diff" tone="muted" />
        <HighlightedText segments={segments} />
      </div>
    </div>
  )
}

function HighlightedText({ segments }: { segments: DiffSegment[] }) {
  if (segments.length === 0) {
    return <span className="text-slate-400">Diff preview will appear here.</span>
  }

  return (
    <p className="whitespace-pre-wrap break-words">
      {segments.map((segment, index) => {
        if (segment.type === 'equal') {
          return <span key={index}>{segment.text}</span>
        }

        if (segment.type === 'removed') {
          return (
            <mark
              key={index}
              className="rounded-sm bg-rose-200 px-0.5 text-rose-950 line-through decoration-rose-600/60"
            >
              {segment.text}
            </mark>
          )
        }

        return (
          <mark key={index} className="rounded-sm bg-emerald-200 px-0.5 text-emerald-950">
            {segment.text}
          </mark>
        )
      })}
    </p>
  )
}
