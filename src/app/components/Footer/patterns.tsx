"use client"

import { useRef } from "react"
import styles from "./patterns.module.css"
import useParallax from "@/app/utils/useParallax"

export default function Patterns() {
  const backgroundRef = useRef<HTMLDivElement | null>(null)

  useParallax(backgroundRef, { offsetMultiplier: 0.5, anchor: "bottom" })

  return (
    <>
      <div className={styles.footerBackground} ref={backgroundRef} />
    </>
  )
}
