import About from "./components/About"
import FindMe from "./components/FindMe"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import History from "./components/History"
import Nav from "./components/Nav"
import Work from "./components/Work"
import FadeInNoScript from "./components/FadeIn/noscript"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.app}>
      <FadeInNoScript />
      <Nav />
      <Hero />
      <main className={styles.main}>
        <About />
        <History />
        <Work />
        <FindMe />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
