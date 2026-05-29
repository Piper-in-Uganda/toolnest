import type { ReactNode } from 'react'

type ToolSeoSectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function ToolSeoSection({ id, title, children }: ToolSeoSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className="border-t border-slate-200 pt-10 first:border-t-0 first:pt-0"
    >
      <h2 id={id} className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
        {children}
      </div>
    </section>
  )
}
