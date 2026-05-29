'use client'

import { useMemo, useState } from 'react'
import { StatsCard } from '@/components/ui/stats-card'
import { StatsGrid } from '@/components/ui/stats-grid'
import { toolTextareaClassName } from '@/components/ui/tool-page-layout'

export function WordCounterTool() {
  const [text, setText] = useState('')

  const stats = useMemo(() => {
    const trimmedText = text.trim()
    const words = trimmedText ? trimmedText.split(/\s+/).length : 0
    const characters = text.length
    const sentences = trimmedText
      ? (text.match(/[.!?]+(?=\s|$)/g)?.length ?? 0) +
        (/[.!?]$/.test(trimmedText) ? 0 : 1)
      : 0
    const readingTimeMinutes = words > 0 ? Math.max(1, Math.ceil(words / 200)) : 0

    return {
      words,
      characters,
      sentences,
      readingTimeMinutes,
    }
  }, [text])

  return (
    <section aria-label="Word counter tool">
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Start typing your text here..."
        aria-label="Text to analyze"
        className={toolTextareaClassName}
      />

      <StatsGrid columns={4} ariaLabel="Text statistics" className="mt-5">
        <StatsCard label="Words" value={stats.words} />
        <StatsCard label="Characters" value={stats.characters} />
        <StatsCard label="Sentences" value={stats.sentences} />
        <StatsCard
          label="Reading Time"
          value={stats.readingTimeMinutes === 0 ? '0 min' : `${stats.readingTimeMinutes} min`}
        />
      </StatsGrid>
    </section>
  )
}
