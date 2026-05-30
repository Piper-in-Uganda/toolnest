export type Tool = {
  href: string
  title: string
  description: string
}

export type NavLink = {
  href: string
  label: string
}

export const tools: Tool[] = [
  {
    href: '/tools/word-counter',
    title: 'Word Counter',
    description:
      'Count words, characters, and sentences instantly with reading time estimation.',
  },
  {
    href: '/tools/text-compare',
    title: 'Text Compare',
    description:
      'Compare two texts in real time with visual diff highlights and similarity stats.',
  },
  {
    href: '/tools/remove-duplicate-lines',
    title: 'Remove Duplicate Lines',
    description:
      'Remove duplicate lines from any text instantly while preserving order, with line stats and copy.',
  },
  {
    href: '/tools/remove-empty-lines',
    title: 'Remove Empty Lines',
    description:
      'Delete blank and whitespace-only lines from text while keeping line order, with stats and copy.',
  },
  {
    href: '/tools/case-converter',
    title: 'Case Converter',
    description:
      'Convert text to uppercase, lowercase, title, sentence, camelCase, snake_case, and kebab-case instantly.',
  },
]

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  ...tools.map((tool) => ({ href: tool.href, label: tool.title })),
]
