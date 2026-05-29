import type { ReactNode } from 'react'
import { createPageMetadata, wordCounterSeo } from '@/lib/seo'

export const metadata = createPageMetadata(wordCounterSeo)

export default function WordCounterLayout({ children }: { children: ReactNode }) {
  return children
}
