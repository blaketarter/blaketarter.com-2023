"use client"

import styles from "./index.module.css"
import Section from "../Section"
import Patterns from "./patterns"
import ScrollLink from "../ScrollLink"
import Tag from "../Tag"
import usePattern from "../../utils/usePattern"

export default function Footer() {
  const [_, setPattern] = usePattern()
  return (
    <div className={styles.footerWrapper}>
      <Patterns />
      <Section className={styles.footerContent} element="div">
        <div className={styles.footerText}>
          <Tag className={styles.footerTag}>
            <p className={styles.copywrite}>© 2023 Blake Tarter</p>
          </Tag>
          <button className={styles.patternButton} onClick={setPattern}>
            <DiceSVG />
          </button>
          <Tag className={styles.footerTag}>
            <ScrollLink className={styles.backToTop} href="#top">
              ↑ Back to the Top
            </ScrollLink>
          </Tag>
        </div>
      </Section>
    </div>
  )
}

const DiceSVG = () => (
  <svg
    height="20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 4L21 7M21 7L18 10M21 7H17C16.0707 7 15.606 7 15.2196 7.07686C13.6329 7.39249 12.3925 8.63288 12.0769 10.2196C12 10.606 12 11.0707 12 12C12 12.9293 12 13.394 11.9231 13.7804C11.6075 15.3671 10.3671 16.6075 8.78036 16.9231C8.39397 17 7.92931 17 7 17H3M18 20L21 17M21 17L18 14M21 17H17C16.0707 17 15.606 17 15.2196 16.9231C15.1457 16.9084 15.0724 16.8917 15 16.873M3 7H7C7.92931 7 8.39397 7 8.78036 7.07686C8.85435 7.09158 8.92758 7.1083 9 7.12698"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
