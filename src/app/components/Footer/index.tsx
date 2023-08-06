import styles from "./index.module.css"
import Section from "../Section"
import Patterns from "./patterns"
import ScrollLink from "../ScrollLink"
import Tag from "../Tag"

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <Patterns />
      <Section className={styles.footerContent} element="div">
        <div className={styles.footerText}>
          <Tag className={styles.footerTag}>
            <p className={styles.copywrite}>© 2023 Blake Tarter</p>
          </Tag>
          <Tag className={styles.footerTag}>
            <ScrollLink className={styles.backToTop} href="#top">
              ↑ Back to the Top
            </ScrollLink>
          </Tag>
        </div>
      </Section>
    </div>
  )
}
