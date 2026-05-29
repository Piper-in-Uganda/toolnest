import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export type PageSeo = {
  title: string
  description: string
  path: string
}

export const homeSeo: PageSeo = {
  title: 'ToolNest — Modern Text Tools for Writers & Editors',
  description:
    'ToolNest is a free online toolkit for writers and editors. Use fast word counting, text comparison, and productivity utilities in one clean platform.',
  path: '/',
}

export const wordCounterSeo: PageSeo = {
  title: 'Word Counter',
  description:
    'Count words, characters, sentences, and reading time instantly with ToolNest’s free online word counter for articles, essays, and social posts.',
  path: '/tools/word-counter',
}

export const textCompareSeo: PageSeo = {
  title: 'Text Compare',
  description:
    'Compare two texts side by side with live diff highlights, similarity percentage, and word difference metrics using ToolNest’s free text compare tool.',
  path: '/tools/text-compare',
}

export const removeDuplicateLinesSeo: PageSeo = {
  title: 'Remove Duplicate Lines',
  description:
    'Remove duplicate lines from text online while keeping original order. See total lines, unique lines, and how many duplicates were removed.',
  path: '/tools/remove-duplicate-lines',
}

export function createPageMetadata({ title, description, path }: PageSeo): Metadata {
  const canonicalPath = path
  const pageUrl = new URL(path, siteConfig.url).toString()

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: homeSeo.title,
    description: homeSeo.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: homeSeo.title,
    description: homeSeo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}
