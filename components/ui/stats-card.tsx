type StatsCardProps = {
  label: string
  value: number | string
}

export function StatsCard({ label, value }: StatsCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
      <p className="text-xs uppercase tracking-wide text-slate-500 sm:text-sm">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  )
}
