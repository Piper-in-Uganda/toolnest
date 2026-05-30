export type CharacterCounterStats = {
  charactersWithSpaces: number
  charactersWithoutSpaces: number
  lettersOnly: number
  words: number
  sentences: number
  paragraphs: number
  lines: number
}

export const defaultExampleText =
  'ToolNest helps you count characters, words, and more.\n\nPaste your draft here!'

export function getCharacterCounterStats(text: string): CharacterCounterStats {
  const trimmedText = text.trim()
  const charactersWithSpaces = text.length
  const charactersWithoutSpaces = text.replace(/\s/g, '').length
  const lettersOnly = (text.match(/[A-Za-z]/g) ?? []).length
  const words = trimmedText ? trimmedText.split(/\s+/).length : 0
  const sentences = countSentences(text, trimmedText)
  const paragraphs = countParagraphs(text)
  const lines = text.length === 0 ? 0 : text.split('\n').length

  return {
    charactersWithSpaces,
    charactersWithoutSpaces,
    lettersOnly,
    words,
    sentences,
    paragraphs,
    lines,
  }
}

function countSentences(text: string, trimmedText: string): number {
  if (!trimmedText) {
    return 0
  }

  return (
    (text.match(/[.!?]+(?=\s|$)/g)?.length ?? 0) + (/[.!?]$/.test(trimmedText) ? 0 : 1)
  )
}

function countParagraphs(text: string): number {
  if (text.trim().length === 0) {
    return 0
  }

  return text.split(/\n\s*\n/).filter((block) => block.trim().length > 0).length
}
