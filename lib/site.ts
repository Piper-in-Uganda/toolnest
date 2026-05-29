function resolveSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (configuredUrl) {
    return configuredUrl.startsWith('http') ? configuredUrl : `https://${configuredUrl}`
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return 'http://localhost:3000'
}

export const siteConfig = {
  name: 'ToolNest',
  url: resolveSiteUrl(),
  locale: 'en_US',
  defaultDescription:
    'Free online text tools for writers and editors. Count words, compare text, and improve content with fast browser-based utilities.',
} as const
