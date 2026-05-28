'use client'

import { useMemo, useState } from 'react'

export default function WordCounterPage() {
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
    <section className="mx-auto max-w-5xl">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Smart Word Counter</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Paste or type your content and instantly see word, character, and sentence counts
            with an estimated reading time.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-5">
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Start typing your text here..."
            className="h-72 w-full resize-y rounded-xl border border-slate-300 bg-white p-4 text-base leading-7 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard label="Words" value={stats.words} />
            <StatCard label="Characters" value={stats.characters} />
            <StatCard label="Sentences" value={stats.sentences} />
            <StatCard
              label="Reading Time"
              value={stats.readingTimeMinutes === 0 ? '0 min' : `${stats.readingTimeMinutes} min`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
      <p className="text-xs uppercase tracking-wide text-slate-500 sm:text-sm">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  )
}
