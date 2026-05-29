import type { ReactNode } from 'react'
import { createPageMetadata, textCompareSeo } from '@/lib/seo'

export const metadata = createPageMetadata(textCompareSeo)

export default function TextCompareLayout({ children }: { children: ReactNode }) {
  return children
}
