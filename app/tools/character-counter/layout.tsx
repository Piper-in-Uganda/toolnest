import type { ReactNode } from 'react'
import { characterCounterSeo, createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(characterCounterSeo)

export default function CharacterCounterLayout({ children }: { children: ReactNode }) {
  return children
}
