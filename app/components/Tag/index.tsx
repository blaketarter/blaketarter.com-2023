import { HTMLProps, ReactNode } from "react"
import styles from "./index.module.css"
import classNames from "classnames"

interface TagTypes extends HTMLProps<HTMLElement> {
  children: ReactNode
  className?: string
  element?: JSX.ElementType
}

export default function Tag({
  children,
  className,
  element = "span",
  ...props
}: TagTypes) {
  const Element = element

  return (
    <Element className={classNames(styles.tag, className)} {...props}>
      {children}
    </Element>
  )
}
