import type { ReactNode } from 'react'
import { createPageMetadata, caseConverterSeo } from '@/lib/seo'

export const metadata = createPageMetadata(caseConverterSeo)

export default function CaseConverterLayout({ children }: { children: ReactNode }) {
  return children
}
