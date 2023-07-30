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
    {
      name: "NPM",
      url: "https://twitter.com/itsblaketarter",
    },
  ]
}

export default async function FindMe() {
  const links = await getLinks()
  return (
    <Section className={styles.findWrapper}>
      <>
        <SectionTitle>Find me on the Internet</SectionTitle>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.name} className={styles.linkWrapper}>
              <Tag className={styles.linkName}>{link.name}</Tag>
              <a
                className={styles.linkHref}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {link.url}
              </a>
            </li>
          ))}
        </ul>
      </>
    </Section>
  )
}
