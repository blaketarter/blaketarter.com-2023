import { ReactNode } from "react";
import classNames from "classnames"
import styles from './index.module.css'

export default function Section({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <section className={classNames(styles.sectionWrapper, className)}>
            <div className={styles.sectionInner}>
                {children}
            </div>
        </section>
    )
}