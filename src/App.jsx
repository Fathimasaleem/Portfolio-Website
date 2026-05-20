import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    let ringX = 0, ringY = 0
    let curX = 0, curY = 0
    let animId

    const moveCursor = (e) => {
      curX = e.clientX
      curY = e.clientY
      dot.style.left = curX + 'px'
      dot.style.top  = curY + 'px'
    }

    const animateRing = () => {
      ringX += (curX - ringX) * 0.12
      ringY += (curY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top  = ringY + 'px'
      animId = requestAnimationFrame(animateRing)
    }
    animateRing()

    const onEnter = () => {
      dot.classList.add('enlarged')
      ring.classList.add('enlarged')
    }
    const onLeave = () => {
      dot.classList.remove('enlarged')
      ring.classList.remove('enlarged')
    }

    document.addEventListener('mousemove', moveCursor)

    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    // MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label')
      newInteractives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  // Global scroll reveal via IntersectionObserver
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    revealElements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
