import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.5 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 999,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '1px solid rgba(0,245,255,0.35)',
        background: 'rgba(8,13,26,0.85)',
        backdropFilter: 'blur(10px)',
        color: '#00f5ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'none',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s, transform 0.3s, box-shadow 0.3s',
        boxShadow: visible ? '0 0 20px rgba(0,245,255,0.2)' : 'none',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <ArrowUp size={18} />
    </button>
  )
}
