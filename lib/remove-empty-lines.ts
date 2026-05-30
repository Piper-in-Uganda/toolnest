/** Default sample with blank and whitespace-only lines. */
export const defaultExampleText = `First line

Second line
   
Third line`

export type RemoveEmptyLinesResult = {
  result: string
  totalLines: number
  remainingLines: number
  removedCount: number
}

function isEmptyLine(line: string): boolean {
  return line.trim().length === 0
}

export function removeEmptyLines(text: string): RemoveEmptyLinesResult {
  if (text.length === 0) {
    return {
      result: '',
      totalLines: 0,
      remainingLines: 0,
      removedCount: 0,
    }
  }

  const lines = text.split('\n')
  const remaining = lines.filter((line) => !isEmptyLine(line))

  return {
    result: remaining.join('\n'),
    totalLines: lines.length,
    remainingLines: remaining.length,
    removedCount: lines.length - remaining.length,
  }
}
