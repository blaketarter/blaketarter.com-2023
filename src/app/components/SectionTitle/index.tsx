import { ReactNode } from "react";
import styles from './index.module.css'
import classNames from "classnames";

export default function SectionTitle({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h2 className={classNames(styles.sectionTitle, className)}>
            {children}
        </h2>
    )
}