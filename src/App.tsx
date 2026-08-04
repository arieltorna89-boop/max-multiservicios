import ScrollReveal from "./components/ui/ScrollReveal";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import WhyUs from './sections/WhyUs'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        <ScrollReveal as="section">
          <About />
        </ScrollReveal>

        <ScrollReveal as="section">
          <Services />
        </ScrollReveal>

        <ScrollReveal as="section">
          <WhyUs />
        </ScrollReveal>

        <ScrollReveal as="section">
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}