import FadeIn from "../FadeIn"
import Tag from "../Tag"
import styles from "./index.module.css"

interface PastJobProps {
  title: string
  company: string
  dates: string
  text: string
  tech?: string[]
}

export default function PastJob({
  title,
  company,
  dates,
  text,
  tech,
}: PastJobProps) {
  return (
    <div className={styles.pastJob} key={title}>
      <FadeIn>
        <h3 className={styles.pastJobTitle}>
          <Tag>{company}</Tag> {title}
        </h3>
      </FadeIn>
      <FadeIn>
        <p className={styles.pastJobDates}>{dates}</p>
      </FadeIn>
      <FadeIn>
        <p className={styles.pastJobText}>{text}</p>
      </FadeIn>
      {tech ? (
        <div className={styles.pastJobTech}>
          <FadeIn>
            <span className={styles.pastJobTechTitle}>
              Technologies frequently used:
            </span>
          </FadeIn>
          {tech.map((t, i) => (
            <FadeIn delay={50 * i} key={t}>
              <span className={styles.pastJobTag}>{t}</span>
            </FadeIn>
          ))}
        </div>
      ) : null}
    </div>
  )
}
