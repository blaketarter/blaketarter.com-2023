import FadeIn from "../FadeIn"
import ScrollLink from "../ScrollLink"
import styles from "./index.module.css"

const navItems = [
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#history",
    text: "History",
  },
  {
    href: "#find",
    text: "Find",
  },
]

export default function Nav() {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navInner}>
        {navItems.map((item) => (
          <li className={styles.navItem} key={item.text}>
            <FadeIn delay={1500} direction="down">
              <ScrollLink className={styles.navLink} href={item.href}>
                {item.text}
              </ScrollLink>
            </FadeIn>
          </li>
        ))}
      </ul>
    </nav>
  )
}
