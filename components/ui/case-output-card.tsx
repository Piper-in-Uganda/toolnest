'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

type CaseOutputCardProps = {
  label: string
  value: string
}

export function CaseOutputCard({ label, value }: CaseOutputCardProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    if (!value) {
      return
    }

    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900">{label}</h3>
        <Button
          type="button"
          variant="secondary"
          onClick={handleCopy}
          disabled={!value}
          className="shrink-0 px-3 py-1.5 text-xs"
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
      <p className="whitespace-pre-wrap break-words font-mono text-sm leading-6 text-slate-800">
        {value || <span className="text-slate-400">—</span>}
      </p>
    </article>
  )
}
