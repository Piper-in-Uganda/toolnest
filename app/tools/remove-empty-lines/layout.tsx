import type { ReactNode } from 'react'
import { createPageMetadata, removeEmptyLinesSeo } from '@/lib/seo'

export const metadata = createPageMetadata(removeEmptyLinesSeo)

export default function RemoveEmptyLinesLayout({ children }: { children: ReactNode }) {
  return children
}
