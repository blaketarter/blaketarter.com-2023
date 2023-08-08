import About from "./components/About"
import FindMe from "./components/FindMe"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import History from "./components/History"
import Nav from "./components/Nav"
import Work from "./components/Work"
import FadeInNoScript from "./components/FadeIn/noscript"
import styles from "./page.module.css"
import LighthouseFix from "./components/LighthouseFix"

export default function Home() {
  return (
    <div className={styles.app}>
      <LighthouseFix />
      <FadeInNoScript />
      <Nav />
      <Hero />
      <main className={styles.main}>
        <About />
        <History />
        <div className={styles.blueSection}>
          <Work />
          <FindMe />
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
