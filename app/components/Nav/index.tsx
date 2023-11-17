import FadeIn from "../FadeIn"
import ScrollLink from "../ScrollLink"
import ThemeSwitcher from "../ThemeSwitcher"
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
    href: "#work",
    text: "Work",
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
        <FadeIn delay={1500} direction="down">
          <ThemeSwitcher />
        </FadeIn>
        <div className={styles.navItems}>
          {navItems.map((item) => (
            <li className={styles.navItem} key={item.text}>
              <FadeIn delay={1700} direction="down">
                <ScrollLink className={styles.navLink} href={item.href}>
                  {item.text}
                </ScrollLink>
              </FadeIn>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  )
}
