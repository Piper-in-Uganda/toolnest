import type { ReactNode } from 'react'
import { PageContainer } from '@/components/ui/page-container'

type PageContainerMaxWidth = '5xl' | '6xl'

type ToolPageLayoutProps = {
  title: string
  description: string
  children: ReactNode
  maxWidth?: PageContainerMaxWidth
  /** Wraps tool content; defaults to a centered narrow column. */
  contentClassName?: string
}

export const toolTextareaClassName =
  'h-72 w-full resize-y rounded-xl border border-slate-300 bg-white p-4 text-base leading-7 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200'

export const toolTextareaMutedClassName = `${toolTextareaClassName} bg-slate-50`

export function ToolPageLayout({
  title,
  description,
  children,
  maxWidth = '5xl',
  contentClassName = 'mx-auto max-w-3xl space-y-5',
}: ToolPageLayoutProps) {
  return (
    <article>
      <PageContainer maxWidth={maxWidth}>
        <header className="mx-auto mb-6 max-w-3xl text-center sm:mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">{description}</p>
        </header>

        <div className={contentClassName}>{children}</div>
      </PageContainer>
    </article>
  )
}
