import Image from "next/image"
import styles from "./index.module.css"
import Section from "../Section"
import SectionTitle from "../SectionTitle"
import Tag from "../Tag"
import Typer from "../Typer"
import FadeIn from "../FadeIn"

async function getTechs() {
  return [
    {
      name: "TypeScript",
      text: "TypeScript is a statically-typed superset of JavaScript that enables developers to focus more on building sound systems with fewer runtime errors. This upfront investment in the development process is a tradeoff that has a net benefit to the quality of any product. It allows the compiler to catch syntax errors and other common issues allowing the developer to focus on the bespoke problem they are solving.",
    },
    {
      name: "React",
      text: "React is one of the myriad front-end JavaScript frameworks, and to be honest they each achieve roughly the same goal. However, the difference in each is how familiar you are with them and the way they allow you to build the UI. In this regard I think React allows you to build interfaces in a way that equates with how they are designed and how we think about them intuitively. The way data flows is predictable and flexible. I love that React uses existing language features instead of inventing magic syntax.",
    },
    { name: "Next.js" },
    { name: "GraphQL" },
    { name: "TailwindCSS" },
    { name: "Material UI" },
    { name: "React Query" },
    { name: "Python" },
    { name: "Docker" },
    { name: "Azure" },
    { name: "FastAPI" },
    { name: "Express" },
    { name: "Node.js" },
    { name: "REST" },
    { name: "CSS3" },
    { name: "HTML5" },
    { name: "JavaScript" },
  ]
}

export default async function About() {
  const techs = await getTechs()
  return (
    <Section id="about">
      <>
        <FadeIn>
          <SectionTitle>About Me</SectionTitle>
        </FadeIn>
        <div className={styles.aboutContent}>
          <FadeIn>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBackground} />
              <Image
                src="/me.jpg"
                alt="Picture of Blake smiling"
                fill={true}
                className={styles.image}
              />
            </div>
          </FadeIn>
          <FadeIn delay={250}>
            <p className={styles.aboutText}>
              Hi, I&apos;m Blake 👋
              <br />
              <br />
              I&apos;m a TypeScript developer with over nine years of experience
              planning, creating, and maintaining various types of apps and
              websites. My current weapons of choice include React, Next,
              TypeScript, and Node. I spend my days building enterprise-grade
              web apps, consumer facing websites, and mobile apps. I kick back
              on my nights and weekends by honing my skills and working on
              passion projects.
              <br />
              <br />
              Currently I work at Crema, a product agency that partners with
              funded startups and existing brands to create technology solutions
              and new digital ventures. I also do some freelance work in my
              spare time with Midwestern Originals.
            </p>
          </FadeIn>
        </div>
        <div className={styles.knowWrapper}>
          <FadeIn>
            <p className={styles.knowText}>
              I know some{" "}
              <span className={styles.knowTech}>
                <Typer words={techs.map((tech) => tech.name)} />
              </span>
            </p>
          </FadeIn>
          <FadeIn delay={250}>
            <p className={styles.knowSubtext}>
              I don&apos;t want to toot my own horn, but I do know a little
              something about these:
            </p>
          </FadeIn>
        </div>
        <div>
          {techs.slice(0, 2).map((tech) => (
            <div className={styles.calloutTech} key={tech.name}>
              <>
                <FadeIn>
                  <Tag element="div" className={styles.calloutTechHeader}>
                    <p>{tech.name}</p>
                  </Tag>
                </FadeIn>
                <FadeIn delay={250}>
                  <p>{tech.text}</p>
                </FadeIn>
              </>
            </div>
          ))}
        </div>
        <div className={styles.additionalTechs}>
          <FadeIn>
            <p>
              Just because I didn&apos;t write a little blurb doesn&apos;t mean
              I don&apos;t have experience in something, here are some things
              I&apos;ve used in production:
            </p>
          </FadeIn>
          <div className={styles.additionTechHeaders}>
            {techs.slice(2).map((tech, i) => (
              <div className={styles.additionalTech} key={tech.name}>
                <FadeIn delay={50 * i}>
                  <Tag element="div" className={styles.additionTechHeader}>
                    <p>{tech.name}</p>
                  </Tag>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </>
    </Section>
  )
}
