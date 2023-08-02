import FadeIn from "../FadeIn"
import styles from "./index.module.css"

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroBackground3} />
      <div className={styles.heroBackground2} />
      <div className={styles.heroBackground1} />
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
    </section>
  )
}
