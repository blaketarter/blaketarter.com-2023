"use client"

import { useRef } from "react"
import styles from "./patterns.module.css"
import useParallax from "../../utils/useParallax"

export default function Patterns() {
  const shape2Ref = useRef<HTMLDivElement | null>(null)
  const shape3Ref = useRef<HTMLDivElement | null>(null)

  useParallax(shape2Ref, { offsetMultiplier: 0.25, anchor: "bottom" })
  useParallax(shape3Ref, { offsetMultiplier: 0.5, anchor: "bottom" })

  return (
    <>
      <div className={styles.historyTransitionBackground3} ref={shape3Ref} />
      <div className={styles.historyTransitionBackground2} ref={shape2Ref} />
    </>
  )
}
