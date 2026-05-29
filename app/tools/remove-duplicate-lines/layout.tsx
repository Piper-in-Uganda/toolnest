import type { ReactNode } from 'react'
import { createPageMetadata, removeDuplicateLinesSeo } from '@/lib/seo'

export const metadata = createPageMetadata(removeDuplicateLinesSeo)

export default function RemoveDuplicateLinesLayout({ children }: { children: ReactNode }) {
  return children
}
