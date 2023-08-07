import FadeIn from "../FadeIn"
import Section from "../Section"
import SectionTitle from "../SectionTitle"
import Tag from "../Tag"
import styles from "./index.module.css"

async function getLinks() {
  return [
    {
      name: "GitHub",
      url: "https://github.com/blaketarter",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/blaketarter",
    },
    {
      name: "Codepen",
      url: "https://codepen.io/blaketarter/",
    },
  ]
}

export default async function FindMe() {
  const links = await getLinks()
  return (
    <Section className={styles.findWrapper} id="find">
      <>
        <FadeIn>
          <SectionTitle>Find me on the Internet</SectionTitle>
        </FadeIn>
        <ul className={styles.links}>
          {links.map((link, i) => (
            <li key={link.name} className={styles.linkWrapper}>
              <FadeIn element="span" delay={50 * i}>
                <Tag className={styles.linkName}>{link.name}</Tag>
              </FadeIn>
              <FadeIn delay={250 + 50 * i} element="span">
                <a
                  className={styles.linkHref}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {link.url}
                </a>
              </FadeIn>
            </li>
          ))}
        </ul>
      </>
    </Section>
  )
}
