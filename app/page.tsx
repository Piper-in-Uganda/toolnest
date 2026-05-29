import type { Metadata } from 'next'
import Link from 'next/link'
import { ToolCard } from '@/components/ui/tool-card'
import { createPageMetadata, homeSeo } from '@/lib/seo'
import { tools } from '@/lib/tools'

export const metadata: Metadata = {
  ...createPageMetadata(homeSeo),
  title: {
    absolute: homeSeo.title,
  },
}

const benefits = [
  {
    title: 'Instant Results',
    description:
      'Every tool runs in real time so you get answers the moment you type, paste, or edit.',
  },
  {
    title: 'Clean Experience',
    description:
      'A focused interface with no distractions, designed to help you finish tasks faster.',
  },
  {
    title: 'Always Accessible',
    description:
      'Open any tool in your browser from desktop or mobile without installing software.',
  },
  {
    title: 'Built to Scale',
    description:
      'ToolNest is structured to grow with new utilities while keeping navigation simple.',
  },
]

export default function Home() {
  const featuredTool = tools[0]

  return (
    <div className="space-y-20 pb-4 sm:space-y-24">
      <section
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-14 shadow-sm sm:px-10 sm:py-20 lg:px-14"
        aria-labelledby="hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/50"
          aria-hidden
        />
        <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-indigo-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-slate-200/70 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
            Professional text utilities
          </p>
          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            The modern toolkit for smarter writing workflows
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            ToolNest brings essential writing tools into one fast, minimal platform so you can
            analyze, compare, and refine content with confidence.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#popular-tools"
              className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Explore Tools
            </Link>
            {featuredTool ? (
              <Link
                href={featuredTool.href}
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
              >
                Try {featuredTool.title}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section
        id="popular-tools"
        className="scroll-mt-24"
        aria-labelledby="popular-tools-heading"
      >
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="popular-tools-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Popular Tools
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Start with our most-used utilities, optimized for speed and clarity.
            </p>
          </div>
          <p className="text-sm font-medium text-slate-500">{tools.length} tools available</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {tools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </section>

      <section aria-labelledby="why-toolnest-heading">
        <div className="mb-8 text-center sm:mb-10">
          <h2
            id="why-toolnest-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Why Choose ToolNest
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Designed like a startup-grade SaaS product: simple to use, reliable, and ready for
            your daily writing tasks.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
