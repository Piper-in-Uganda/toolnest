type SectionTitleTone = 'default' | 'muted'

type SectionTitleProps = {
  title: string
  htmlFor?: string
  hint?: string
  tone?: SectionTitleTone
}

const toneClasses: Record<SectionTitleTone, string> = {
  default: 'text-sm font-semibold text-slate-700',
  muted: 'text-xs font-medium uppercase tracking-wide text-slate-500',
}

export function SectionTitle({ title, htmlFor, hint, tone = 'default' }: SectionTitleProps) {
  const labelClassName = `block ${toneClasses[tone]}`

  return (
    <div className="mb-2">
      {htmlFor ? (
        <label htmlFor={htmlFor} className={labelClassName}>
          {title}
        </label>
      ) : (
        <p className={labelClassName}>{title}</p>
      )}
      {hint ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
    </div>
  )
}
