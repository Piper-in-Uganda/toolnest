import type { MetadataRoute } from 'next'
import {
  caseConverterSeo,
  homeSeo,
  removeDuplicateLinesSeo,
  removeEmptyLinesSeo,
  textCompareSeo,
  wordCounterSeo,
} from '@/lib/seo'
import { siteConfig } from '@/lib/site'

const indexedPages = [
  homeSeo,
  wordCounterSeo,
  textCompareSeo,
  removeDuplicateLinesSeo,
  removeEmptyLinesSeo,
  caseConverterSeo,
]

export default function sitemap(): MetadataRoute.Sitemap {
  return indexedPages.map((page) => ({
    url: new URL(page.path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: page.path === '/' ? 'weekly' : 'monthly',
    priority: page.path === '/' ? 1 : 0.8,
  }))
}
