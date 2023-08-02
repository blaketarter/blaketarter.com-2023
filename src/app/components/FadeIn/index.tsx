"use client"

import classNames from "classnames"
import { ReactNode, useEffect, useRef, useState } from "react"
import styles from "./index.module.css"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  element?: JSX.ElementType
  rootMargin?: string
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  element = "div",
  rootMargin = "0px 0px -10% 0px",
}: FadeInProps) {
  const domRef = useRef<HTMLElement | null>(null)

  const [isVisible, setVisible] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const supported =
    typeof window !== "undefined" && "IntersectionObserver" in window

  useEffect(() => {
    // We set disabled in an effect so the server doesn't try to set it and we get a classname mismatch
    if (!supported) {
      setDisabled(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            if (domRef.current) {
              setVisible(true)

              observer.unobserve(domRef.current)
            }
          }, delay)
        }
      },
      {
        rootMargin,
      },
    )

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => observer.disconnect()
  }, [delay, rootMargin, supported])

  const Element = element
  return (
    <Element
      ref={domRef}
      className={classNames(styles.initialState, className, {
        [styles.disabled]: disabled,
        [styles.isVisible]: isVisible,
        [styles.isSpan]: element === "span",
      })}
    >
      {children}
    </Element>
  )
}
