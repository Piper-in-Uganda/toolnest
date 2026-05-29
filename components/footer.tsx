import Link from 'next/link'
import { navLinks, tools } from '@/lib/tools'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
              ToolNest
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              A modern toolkit for writers, editors, and teams who need fast, reliable text
              utilities without the clutter.
            </p>
          </div>

          <nav aria-label="Footer tools">
            <h3 className="text-sm font-semibold text-slate-900">Tools</h3>
            <ul className="mt-4 space-y-2">
              {tools.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="text-sm text-slate-600 transition hover:text-slate-900"
                  >
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-slate-900">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} ToolNest. All rights reserved.</p>
          <p>Built for speed, clarity, and everyday productivity.</p>
        </div>
      </div>
    </footer>
  )
}
