import { ReactNode } from 'react'
import styles from './index.module.css'
import classNames from 'classnames'

export default function Tag({ children, className, element = 'span' }: { children: ReactNode, className?: string, element?: JSX.ElementType }) {
    const Element = element

    return (
        <Element className={classNames(styles.tag, className)}>
            {children}
        </Element>
    )
}