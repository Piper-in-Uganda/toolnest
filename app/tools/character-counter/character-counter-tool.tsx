'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { StatsCard } from '@/components/ui/stats-card'
import { StatsGrid } from '@/components/ui/stats-grid'
import { toolTextareaClassName } from '@/components/ui/tool-page-layout'
import {
  defaultExampleText,
  getCharacterCounterStats,
} from '@/lib/character-counter'

export function CharacterCounterTool() {
  const [text, setText] = useState(defaultExampleText)
  const [copied, setCopied] = useState(false)

  const stats = useMemo(() => getCharacterCounterStats(text), [text])

  async function handleCopy() {
    if (!text) {
      return
    }

    try {
      await navigator.clipboard.writeText(text)
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
    <section aria-label="Character counter tool" className="space-y-5">
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Type or paste your text here..."
        aria-label="Text to analyze"
        className={toolTextareaClassName}
      />

      <StatsGrid columns={4} ariaLabel="Character and text statistics">
        <StatsCard label="Characters (with spaces)" value={stats.charactersWithSpaces} />
        <StatsCard label="Characters (no spaces)" value={stats.charactersWithoutSpaces} />
        <StatsCard label="Letters only" value={stats.lettersOnly} />
        <StatsCard label="Words" value={stats.words} />
        <StatsCard label="Sentences" value={stats.sentences} />
        <StatsCard label="Paragraphs" value={stats.paragraphs} />
        <StatsCard label="Lines" value={stats.lines} />
      </StatsGrid>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="primary" fullWidth onClick={handleCopy} disabled={!text}>
          {copied ? 'Copied!' : 'Copy Text'}
        </Button>
        <Button variant="secondary" fullWidth onClick={handleClear}>
          Clear
        </Button>
      </div>
    </section>
  )
}
