"use client"

import { useRef } from "react"
import styles from "./patterns.module.css"
import useParallax from "@/app/utils/useParallax"

export default function Patterns() {
  const shape1Ref = useRef<HTMLDivElement | null>(null)
  const patternRef = useRef<HTMLDivElement | null>(null)
  const shape3Ref = useRef<HTMLDivElement | null>(null)

  useParallax(shape1Ref, { offsetMultiplier: 1 })
  useParallax(patternRef, { offsetMultiplier: 0.5 })
  useParallax(shape3Ref, { offsetMultiplier: 0.25 })

  return (
    <>
      <div className={styles.heroBackground3} ref={shape3Ref} />
      <div className={styles.heroBackground2} ref={patternRef} />
      <div className={styles.heroBackground1} ref={shape1Ref} />
    </>
  )
}
