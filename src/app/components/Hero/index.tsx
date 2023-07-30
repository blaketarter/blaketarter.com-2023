import styles from "./index.module.css"

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroBackground3} />
      <div className={styles.heroBackground2} />
      <div className={styles.heroBackground1} />
      <div className={styles.heroText}>
        <h1 className={styles.headline}>
          Hi, I&rsquo;m <br /> Blake Tarter
        </h1>
        <p className={styles.subHeadline}>
          A Kansas City Based Typescript Developer
        </p>
      </div>
    </section>
  )
}
