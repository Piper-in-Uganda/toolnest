import Link from 'next/link'
import type { Tool } from '@/lib/tools'

type ToolCardProps = Tool

export function ToolCard({ href, title, description }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <span className="text-sm text-slate-500 transition group-hover:text-slate-700">
          Open tool →
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </Link>
  )
}
