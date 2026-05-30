'use client'

import { useMemo, useState } from 'react'
import { CaseOutputCard } from '@/components/ui/case-output-card'
import { StatsCard } from '@/components/ui/stats-card'
import { StatsGrid } from '@/components/ui/stats-grid'
import { toolTextareaClassName } from '@/components/ui/tool-page-layout'
import {
  caseConversionOrder,
  convertAllCases,
  defaultExampleText,
  getTextStats,
  caseConversionLabels,
} from '@/lib/case-converter'

export function CaseConverterTool() {
  const [text, setText] = useState(defaultExampleText)

  const conversions = useMemo(() => convertAllCases(text), [text])
  const stats = useMemo(() => getTextStats(text), [text])

  return (
    <>
      <section aria-label="Case converter input" className="space-y-5">
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Type or paste text to convert..."
          aria-label="Text to convert"
          className={toolTextareaClassName}
        />

        <StatsGrid columns={3} ariaLabel="Text statistics">
          <StatsCard label="Characters" value={stats.characters} />
          <StatsCard label="Words" value={stats.words} />
          <StatsCard label="Lines" value={stats.lines} />
        </StatsGrid>
      </section>

      <section aria-label="Case conversion results" className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Converted output</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {caseConversionOrder.map((key) => (
            <CaseOutputCard
              key={key}
              label={caseConversionLabels[key]}
              value={conversions[key]}
            />
          ))}
        </div>
      </section>
    </>
  )
}
