"use client"
import { useEffect, useMemo, useRef, useState, useTransition } from "react"
import styles from "./index.module.css"

interface TyperOptions {
  pauseTime?: number
  backspaceConstantTime?: number
  backspaceRandomThreshold?: number
  typingConstantTime?: number
  typingRandomThreshold?: number
}

interface TyperProps {
  words: string[]
  animate?: boolean
  options?: TyperOptions
}

export default function Typer({ words, animate = true, options }: TyperProps) {
  const [_, startTransition] = useTransition()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [state, setTypedText] = useState<{
    index: number
    text: string
    mode: "backspace" | "typing" | "wait"
  }>({
    text: words[0],
    index: 0,
    mode: "backspace",
  })

  const typerOptions = useMemo(
    () => ({
      pauseTime: options?.pauseTime ?? 2000,
      backspaceConstantTime: options?.backspaceConstantTime ?? 50,
      backspaceRandomThreshold: options?.backspaceRandomThreshold ?? 50,
      typingConstantTime: options?.typingConstantTime ?? 100,
      typingRandomThreshold: options?.typingRandomThreshold ?? 100,
    }),
    [
      options?.backspaceConstantTime,
      options?.backspaceRandomThreshold,
      options?.pauseTime,
      options?.typingConstantTime,
      options?.typingRandomThreshold,
    ],
  )

  useEffect(() => {
    if (!animate || words.length === 1) return

    if (state.mode === "wait") {
      timeoutRef.current = setTimeout(() => {
        startTransition(() => {
          setTypedText({
            ...state,
            mode: "backspace",
          })
        })
      }, typerOptions.pauseTime)
    }

    if (state.mode === "backspace") {
      timeoutRef.current = setTimeout(
        () => {
          startTransition(() => {
            const nextText = state.text.substring(0, state.text.length - 1)

            const changeMode = nextText.length === 0

            setTypedText({
              ...state,
              text: nextText,
              mode: changeMode ? "typing" : "backspace",
              index: changeMode
                ? (state.index + 1) % words.length
                : state.index,
            })
          })
        },
        typerOptions.backspaceConstantTime +
          Math.random() * typerOptions.backspaceRandomThreshold,
      )
    }

    if (state.mode === "typing") {
      timeoutRef.current = setTimeout(
        () => {
          startTransition(() => {
            const nextText = words[state.index].substring(
              0,
              state.text.length + 1,
            )

            const changeMode = nextText.length === words[state.index].length

            setTypedText({
              ...state,
              text: nextText,
              mode: changeMode ? "wait" : "typing",
            })
          })
        },
        typerOptions.typingConstantTime +
          Math.random() * typerOptions.typingRandomThreshold,
      )
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [
    animate,
    setTypedText,
    state,
    typerOptions.backspaceConstantTime,
    typerOptions.backspaceRandomThreshold,
    typerOptions.pauseTime,
    typerOptions.typingConstantTime,
    typerOptions.typingRandomThreshold,
    words,
  ])

  return (
    <span className={styles.typer}>
      {state.text}
      <span className={styles.cursor}>|</span>
    </span>
  )
}
