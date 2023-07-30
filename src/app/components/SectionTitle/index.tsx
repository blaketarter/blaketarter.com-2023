import { HTMLProps, ReactNode } from "react"
import styles from "./index.module.css"
import classNames from "classnames"

interface SectionTitleTypes extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode
  className?: string
  element?: JSX.ElementType
}

export default function SectionTitle({
  children,
  className,
  ...props
}: SectionTitleTypes) {
  return (
    <h2 className={classNames(styles.sectionTitle, className)} {...props}>
      {children}
    </h2>
  )
}
