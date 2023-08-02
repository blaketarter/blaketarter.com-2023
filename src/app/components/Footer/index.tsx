import styles from "./index.module.css"
import Section from "../Section"
import FadeIn from "../FadeIn"

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerBackground} />
      <Section className={styles.footerContent} element="div">
        <div className={styles.footerText}>
          <FadeIn rootMargin="0px">
            <p className={styles.copywrite}>© 2023 Blake Tarter</p>
          </FadeIn>
        </div>
      </Section>
    </div>
  )
}
