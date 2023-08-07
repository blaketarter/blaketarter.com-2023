import FadeIn from "../FadeIn"
import ScrollLink from "../ScrollLink"
import styles from "./index.module.css"

export default function Nav() {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navInner}>
        <li className={styles.navItem}>
          <FadeIn delay={1500} direction="down">
            <ScrollLink className={styles.navLink} href="#about">
              About
            </ScrollLink>
          </FadeIn>
        </li>
        <li className={styles.navItem}>
          <FadeIn delay={1500} direction="down">
            <ScrollLink className={styles.navLink} href="#history">
              History
            </ScrollLink>
          </FadeIn>
        </li>
        <li className={styles.navItem}>
          <FadeIn delay={1500} direction="down">
            <ScrollLink className={styles.navLink} href="#find">
              Find
            </ScrollLink>
          </FadeIn>
        </li>
      </ul>
    </nav>
  )
}
