/** Default sample shown on first load — duplicate lines are easy to spot. */
export const defaultExampleText = `apple
banana
apple
cat
banana`

export type DuplicateLinesResult = {
  result: string
  totalLines: number
  uniqueLines: number
  removedCount: number
}

export function removeDuplicateLines(text: string): DuplicateLinesResult {
  if (text.length === 0) {
    return {
      result: '',
      totalLines: 0,
      uniqueLines: 0,
      removedCount: 0,
    }
  }

  const lines = text.split('\n')
  const seen = new Set<string>()
  const unique: string[] = []

  for (const line of lines) {
    if (seen.has(line)) {
      continue
    }
    seen.add(line)
    unique.push(line)
  }

  return {
    result: unique.join('\n'),
    totalLines: lines.length,
    uniqueLines: unique.length,
    removedCount: lines.length - unique.length,
  }
}
