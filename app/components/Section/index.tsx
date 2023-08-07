import { HTMLProps, ReactNode } from "react"
import classNames from "classnames"
import styles from "./index.module.css"

interface SectionTypes extends HTMLProps<HTMLElement> {
  children: ReactNode
  className?: string
  element?: JSX.ElementType
}

export default function Section({
  children,
  className,
  element = "section",
  ...props
}: SectionTypes) {
  const Element = element

  return (
    <Element
      className={classNames(styles.sectionWrapper, className)}
      {...props}
    >
      <div className={styles.sectionInner}>{children}</div>
    </Element>
  )
}
