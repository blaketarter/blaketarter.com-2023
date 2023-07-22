import { ReactNode } from "react";
import styles from './index.module.css'

export default function SectionTitle({children}: { children: ReactNode }) {
    return (
        <h2 className={styles.sectionTitle}>
            {children}
        </h2>
    )
}