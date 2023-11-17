import { useCallback, useEffect, useState } from "react"

export type ThemeMode = "no-preference" | "dark" | "light"

interface Options {
  defaultMode?: ThemeMode
}

function getOppositeTheme(mode: ThemeMode) {
  switch (mode) {
    case "light":
      return "dark"
    case "dark":
      return "light"
    case "no-preference":
      return "no-preference"
    default:
      return mode
  }
}

export const useTheme = ({ defaultMode = "no-preference" }: Options = {}) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode)

  const setModeWrapped = useCallback((mode: ThemeMode) => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove(
        `theme-${getOppositeTheme(mode)}`,
      )
      document.documentElement.classList.add(`theme-${mode}`)
    }
    setMode(mode)
  }, [])

  useEffect(() => {
    const darkModeMatchMedia = window?.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ) ?? { matches: false }

    if (mode === "no-preference") {
      setModeWrapped(darkModeMatchMedia.matches ? "dark" : "light")
    }

    if (darkModeMatchMedia.addEventListener) {
      darkModeMatchMedia.addEventListener("change", () =>
        setModeWrapped(darkModeMatchMedia.matches ? "dark" : "light"),
      )
    }
  }, [setModeWrapped, mode])

  return [mode, setModeWrapped] as const
}
