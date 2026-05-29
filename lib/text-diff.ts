export type DiffSegment = {
  text: string
  type: 'equal' | 'removed' | 'added'
}

export type TextComparison = {
  leftSegments: DiffSegment[]
  rightSegments: DiffSegment[]
  characterDifference: number
  wordDifference: number
  similarityPercent: number
}

export function compareTexts(left: string, right: string): TextComparison {
  const leftSegments = buildDiffSegments(left, right, 'left')
  const rightSegments = buildDiffSegments(left, right, 'right')

  const characterDifference = countChangedUnits(leftSegments, rightSegments)
  const wordDifference = countWordDifference(left, right)
  const similarityPercent = calculateSimilarity(left, right)

  return {
    leftSegments,
    rightSegments,
    characterDifference,
    wordDifference,
    similarityPercent,
  }
}

function buildDiffSegments(left: string, right: string, side: 'left' | 'right'): DiffSegment[] {
  const leftChars = [...left]
  const rightChars = [...right]
  const lcsTable = buildLcsTable(leftChars, rightChars)
  const operations = backtrackDiff(leftChars, rightChars, lcsTable)

  const segments: DiffSegment[] = []

  for (const operation of operations) {
    if (operation === 'equal') {
      const char = leftChars.shift()!
      rightChars.shift()
      pushSegment(segments, { text: char, type: 'equal' })
      continue
    }

    if (operation === 'removed') {
      const char = leftChars.shift()!
      if (side === 'left') {
        pushSegment(segments, { text: char, type: 'removed' })
      }
      continue
    }

    const char = rightChars.shift()!
    if (side === 'right') {
      pushSegment(segments, { text: char, type: 'added' })
    }
  }

  return segments
}

function pushSegment(segments: DiffSegment[], segment: DiffSegment) {
  const last = segments[segments.length - 1]
  if (last && last.type === segment.type) {
    last.text += segment.text
    return
  }
  segments.push({ ...segment })
}

function buildLcsTable(a: string[], b: string[]) {
  const rows = a.length + 1
  const cols = b.length + 1
  const table = Array.from({ length: rows }, () => Array(cols).fill(0))

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (a[i - 1] === b[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1])
      }
    }
  }

  return table
}

function backtrackDiff(a: string[], b: string[], table: number[][]) {
  const operations: Array<'equal' | 'removed' | 'added'> = []
  let i = a.length
  let j = b.length

  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      operations.push('equal')
      i -= 1
      j -= 1
    } else if (table[i - 1][j] >= table[i][j - 1]) {
      operations.push('removed')
      i -= 1
    } else {
      operations.push('added')
      j -= 1
    }
  }

  while (i > 0) {
    operations.push('removed')
    i -= 1
  }

  while (j > 0) {
    operations.push('added')
    j -= 1
  }

  return operations.reverse()
}

function countChangedUnits(leftSegments: DiffSegment[], rightSegments: DiffSegment[]) {
  const leftChanged = leftSegments
    .filter((segment) => segment.type === 'removed')
    .reduce((sum, segment) => sum + segment.text.length, 0)
  const rightChanged = rightSegments
    .filter((segment) => segment.type === 'added')
    .reduce((sum, segment) => sum + segment.text.length, 0)

  return leftChanged + rightChanged
}

function tokenizeWords(text: string) {
  const trimmed = text.trim()
  return trimmed ? trimmed.split(/\s+/) : []
}

function countWordDifference(left: string, right: string) {
  const leftWords = tokenizeWords(left)
  const rightWords = tokenizeWords(right)
  const table = buildLcsTable(leftWords, rightWords)

  const commonWords = table[leftWords.length][rightWords.length]
  const maxWords = Math.max(leftWords.length, rightWords.length)

  return maxWords - commonWords
}

function calculateSimilarity(left: string, right: string) {
  if (left === right) {
    return 100
  }

  const leftChars = [...left]
  const rightChars = [...right]
  const table = buildLcsTable(leftChars, rightChars)
  const commonChars = table[leftChars.length][rightChars.length]
  const totalChars = Math.max(leftChars.length, rightChars.length, 1)

  return Math.round((commonChars / totalChars) * 100)
}
