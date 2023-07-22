import Section from '../Section'
import SectionTitle from '../SectionTitle'
import styles from './index.module.css'

export default function Work() {
    return (
        <Section className={styles.workWrapper}>
            <>
                <SectionTitle>Work Examples</SectionTitle>
                <p>Due to the nature of most of my client work I can't show it off here. I'm either under NDA and can only speak in general terms about the non-proprietary aspects of the work or the apps are internal enterprise level apps that companies use as their competitive advantage over other businesses.<br /><br />Feel free to reach out and start a conversation where I'll chat with you about the kind of work I've done, the technical decisions that were made, as well as learnings and outcomes from those projects.</p>
            </>
        </Section>
    )
}