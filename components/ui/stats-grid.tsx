import type { ReactNode } from 'react'

type StatsGridColumns = 2 | 3 | 4

type StatsGridProps = {
  children: ReactNode
  columns?: StatsGridColumns
  ariaLabel: string
  className?: string
}

const columnClasses: Record<StatsGridColumns, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-4',
}

/** Groups StatsCard components in a responsive grid. */
export function StatsGrid({
  children,
  columns = 3,
  ariaLabel,
  className = '',
}: StatsGridProps) {
  return (
    <div
      className={`grid gap-3 ${columnClasses[columns]} ${className}`.trim()}
      role="region"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  )
}
