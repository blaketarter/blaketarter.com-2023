import styles from './index.module.css'
import Section from "../Section";

export default function Footer() {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerBackground} />
            <Section className={styles.footerContent} element="div">
                <div className={styles.footerText}>
                    <p className={styles.copywrite}>© 2023 Blake Tarter</p>
                </div>
            </Section>
        </div>
    )
}