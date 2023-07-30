import { ReactNode } from "react"
import classNames from "classnames"
import styles from "./index.module.css"

export default function Section({
  children,
  className,
  element = "section",
}: {
  children: ReactNode
  className?: string
  element?: JSX.ElementType
}) {
  const Element = element

  return (
    <Element className={classNames(styles.sectionWrapper, className)}>
      <div className={styles.sectionInner}>{children}</div>
    </Element>
  )
}
