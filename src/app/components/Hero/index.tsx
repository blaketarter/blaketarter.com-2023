import FadeIn from "../FadeIn"
import ScrollLink from "../ScrollLink"
import Tag from "../Tag"
import styles from "./index.module.css"
import Patterns from "./patterns"

export default function Hero() {
  return (
    <section className={styles.heroContainer} id="top">
      <Patterns />
      <div className={styles.heroText}>
        <h1 className={styles.headline}>
          <FadeIn delay={250} element="span">
            Hi
          </FadeIn>
          <FadeIn delay={650} element="span">
            ,
          </FadeIn>{" "}
          <FadeIn delay={750} element="span">
            I&rsquo;m
          </FadeIn>
          <br />
          <FadeIn delay={1000} element="span">
            Blake Tarter
          </FadeIn>
        </h1>
        <FadeIn delay={1500}>
          <p className={styles.subHeadline}>
            A Kansas City Based Typescript Developer
          </p>
        </FadeIn>
      </div>
      <div className={styles.arrowDownContainer}>
        <FadeIn delay={2500} direction="down">
          <ScrollLink href="#about">
            <Tag className={styles.arrowDown}>↓</Tag>
          </ScrollLink>
        </FadeIn>
      </div>
    </section>
  )
}
