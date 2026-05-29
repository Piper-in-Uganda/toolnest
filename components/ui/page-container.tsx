import type { ReactNode } from 'react'

type PageContainerMaxWidth = '5xl' | '6xl'

type PageContainerProps = {
  children: ReactNode
  maxWidth?: PageContainerMaxWidth
  className?: string
}

const maxWidthClasses: Record<PageContainerMaxWidth, string> = {
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
}

export function PageContainer({
  children,
  maxWidth = '5xl',
  className = '',
}: PageContainerProps) {
  return (
    <section className={`mx-auto ${maxWidthClasses[maxWidth]} ${className}`.trim()}>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {children}
      </div>
    </section>
  )
}
