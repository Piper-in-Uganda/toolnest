export type CaseConversionKey =
  | 'uppercase'
  | 'lowercase'
  | 'titleCase'
  | 'sentenceCase'
  | 'camelCase'
  | 'snakeCase'
  | 'kebabCase'

export type CaseConversionResult = Record<CaseConversionKey, string>

export type TextStats = {
  characters: number
  words: number
  lines: number
}

export const defaultExampleText = 'Hello, world! This is ToolNest.'

function extractWords(text: string): string[] {
  return text.match(/[A-Za-z0-9]+/g) ?? []
}

function transformWords(text: string, mapWord: (word: string) => string): string {
  return text.replace(/[A-Za-z0-9]+/g, mapWord)
}

export function toUppercase(text: string): string {
  return text.toUpperCase()
}

export function toLowercase(text: string): string {
  return text.toLowerCase()
}

export function toTitleCase(text: string): string {
  return transformWords(text, (word) => {
    if (word.length === 0) {
      return word
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
}

export function toSentenceCase(text: string): string {
  if (text.length === 0) {
    return ''
  }

  const lower = text.toLowerCase()
  return lower.replace(/(^|[.!?]\s+)([a-z])/g, (_, prefix: string, letter: string) => {
    return prefix + letter.toUpperCase()
  })
}

export function toCamelCase(text: string): string {
  const words = extractWords(text)
  if (words.length === 0) {
    return ''
  }

  const [first, ...rest] = words
  return (
    first.toLowerCase() +
    rest
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('')
  )
}

export function toSnakeCase(text: string): string {
  const words = extractWords(text)
  if (words.length === 0) {
    return ''
  }

  return words.map((word) => word.toLowerCase()).join('_')
}

export function toKebabCase(text: string): string {
  const words = extractWords(text)
  if (words.length === 0) {
    return ''
  }

  return words.map((word) => word.toLowerCase()).join('-')
}

export function convertAllCases(text: string): CaseConversionResult {
  return {
    uppercase: toUppercase(text),
    lowercase: toLowercase(text),
    titleCase: toTitleCase(text),
    sentenceCase: toSentenceCase(text),
    camelCase: toCamelCase(text),
    snakeCase: toSnakeCase(text),
    kebabCase: toKebabCase(text),
  }
}

export function getTextStats(text: string): TextStats {
  const trimmed = text.trim()
  const words = trimmed ? trimmed.split(/\s+/).length : 0
  const lines = text.length === 0 ? 0 : text.split('\n').length

  return {
    characters: text.length,
    words,
    lines,
  }
}

export const caseConversionLabels: Record<CaseConversionKey, string> = {
  uppercase: 'UPPERCASE',
  lowercase: 'lowercase',
  titleCase: 'Title Case',
  sentenceCase: 'Sentence case',
  camelCase: 'camelCase',
  snakeCase: 'snake_case',
  kebabCase: 'kebab-case',
}

export const caseConversionOrder: CaseConversionKey[] = [
  'uppercase',
  'lowercase',
  'titleCase',
  'sentenceCase',
  'camelCase',
  'snakeCase',
  'kebabCase',
]
