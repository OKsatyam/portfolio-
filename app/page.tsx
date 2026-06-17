import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import NowStrip from '@/components/NowStrip'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-bg-base">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <NowStrip />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
