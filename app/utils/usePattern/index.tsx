import { useCallback, useState } from "react"

export type Pattern =
  | "pattern-dots-large"
  | "pattern-dots-small"
  | "pattern-lines-large"
  | "pattern-zigzag-large"
  | "pattern-diamond-large"
  | "pattern-waves-large"

const randomPatterns: Array<Pattern> = [
  "pattern-dots-large",
  "pattern-dots-small",
  "pattern-lines-large",
  "pattern-zigzag-large",
  "pattern-diamond-large",
  "pattern-waves-large",
]

export default function usePattern() {
  const [pattern, setPattern] = useState<Pattern>("pattern-lines-large")

  const setPatternWrapped = useCallback(
    (currentPattern: Pattern, limitedPatterns: Array<Pattern>, i: number) => {
      const newPattern = limitedPatterns.filter((p) => p !== currentPattern)[
        Math.floor(Math.random() * (limitedPatterns.length - 1))
      ]
      if (typeof window !== "undefined") {
        document.documentElement.classList.remove(currentPattern)
        document.documentElement.classList.add(newPattern)
      }
      setPattern(newPattern)
      if (i < 5) {
        setTimeout(
          () => setPatternWrapped(newPattern, limitedPatterns, i + 1),
          i * 100,
        )
      }
    },
    [],
  )

  const randomizePattern = useCallback(() => {
    const limitedPatterns = randomPatterns.filter((p) => p !== pattern)
    setPatternWrapped(pattern, limitedPatterns, 1)
  }, [pattern, setPatternWrapped])

  return [pattern, randomizePattern] as const
}
