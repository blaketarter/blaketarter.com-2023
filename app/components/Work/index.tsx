import Image from "next/image"
import FadeIn from "../FadeIn"
import Section from "../Section"
import SectionTitle from "../SectionTitle"
import styles from "./index.module.css"
import Tag from "../Tag"

function getExamples() {
  return [
    {
      name: "blaketarter.com",
      image: "/blaketarter-com.png",
      description:
        "It's intentionally over-engineered for a simple one-page website. I like to use my personal website as a playground for new technologies or new ideas. Sometimes simply to show off stuff that I know how to do.",
      liveLink: "https://blaketarter.com/",
      sourceLink: "https://github.com/blaketarter/blaketarter.com-2023",
    },
    {
      name: "Almost Done",
      image: "/almost-done.png",
      description:
        "This is mainly a project to play around with some new libraries and some new UI Concepts. Almost Done is a simple Todo style app with the added functionality of assigning due dates and seeing the calendar with upcoming items that are due all in one view.",
      liveLink: "https://almost-done-lilac.vercel.app",
      sourceLink: "https://github.com/blaketarter/almost-done",
    },
  ]
}

export default async function Work() {
  const examples = await getExamples()
  return (
    <Section className={styles.workWrapper} id="work">
      <>
        <FadeIn>
          <SectionTitle>Work Examples</SectionTitle>
        </FadeIn>
        <FadeIn>
          <p>
            Due to the nature of most of my client work I can&apos;t show it off
            here. I&apos;m either under NDA and can only speak in general terms
            about the non-proprietary aspects of the work or the apps are
            internal enterprise level apps that companies use as their
            competitive advantage over other businesses.
            <br />
            <br />
            Feel free to reach out and start a conversation where I&apos;ll chat
            with you about the kind of work I&apos;ve done, the technical
            decisions that were made, as well as learnings and outcomes from
            those projects.
            <br />
            <br />
            However I do have some side projects you should check out, the code
            for these is all publicly available on my GitHub.
          </p>
        </FadeIn>
        <div className={styles.workExamples}>
          {examples.map((example, i) => (
            <FadeIn
              className={styles.workItem}
              key={example.name}
              delay={250 * i}
            >
              <div>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageBackground} />
                  <Image
                    src={example.image}
                    alt={`Screenshot of ${example.name}`}
                    fill={true}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <Tag element="div">
                  <p>{example.name}</p>
                </Tag>
                <p className={styles.workDescription}>{example.description}</p>
                <a
                  className={styles.linkHref}
                  href={example.liveLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Check it out
                </a>
                <a
                  className={styles.linkHref}
                  href={example.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Look at the source code
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </>
    </Section>
  )
}
