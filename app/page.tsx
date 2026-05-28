import Link from 'next/link'

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Modern Tools, One Place</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Use fast, clean, and practical web tools to improve writing and productivity.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/tools/word-counter"
            className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-slate-100"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">Word Counter</h2>
              <span className="text-sm text-slate-500 transition group-hover:text-slate-700">
                Open tool →
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Count words, characters, and sentences instantly with reading time estimation.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}