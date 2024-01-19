"use client"

import { useState } from "react"
import styles from "./index.module.css"
import classNames from "classnames"
import FadeIn from "../FadeIn"

interface CaseStudyProps {
  name: string
  tech: string[]
  description: string[]
  challenges: string[]
}

export default function CaseStudy({
  name,
  tech,
  description,
  challenges,
}: CaseStudyProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className={styles.caseStudyWrapper}>
      <FadeIn>
        <div
          className={styles.titleWrapper}
          onClick={() => {
            setIsExpanded(!isExpanded)
          }}
        >
          <div
            className={classNames(styles.expand, {
              [styles.expandIsExpanded]: isExpanded,
            })}
          >
            +
          </div>
          <h4 className={styles.name}>{name}</h4>
        </div>
      </FadeIn>
      <div
        className={classNames(styles.innerWrapper, {
          [styles.innerWrapperExpanded]: isExpanded,
        })}
      >
        <div className={styles.columns}>
          <div className={styles.column}>
            <p className={styles.label}>Tech choices:</p>
            <ul className={styles.techWrapper}>
              {tech.map((t) => (
                <li className={styles.tech} key={t}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <p className={styles.label}>Challenges:</p>
            <ul className={styles.challengesWrapper}>
              {challenges.map((c) => (
                <li className={styles.challenge} key={c}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {description.map((d) => (
          <p className={styles.description} key={d}>
            {d}
          </p>
        ))}
      </div>
    </div>
  )
}
