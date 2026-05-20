import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeId,  setActiveId]  = useState('')
  const observersRef = useRef([])

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { threshold: 0.35 }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    observersRef.current = [observer]
    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const id  = href.replace('#', '')
    const el  = document.getElementById(id)
    if (!el) return
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 })
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '0.75rem 2rem' : '1.25rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled
            ? 'rgba(5,8,20,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,245,255,0.08)' : 'none',
          transition: 'padding 0.3s, background 0.3s, backdrop-filter 0.3s',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
          aria-label="FATHIMA A S – home"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.4rem',
            background: 'linear-gradient(135deg, #00f5ff, #9b59ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          FAS
        </a>

        {/* Desktop links */}
        <ul
          role="list"
          style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop"
        >
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                aria-current={activeId === link.href.replace('#', '') ? 'page' : undefined}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: activeId === link.href.replace('#', '')
                    ? '#00f5ff'
                    : 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                  position: 'relative',
                  paddingBottom: '2px',
                }}
                className="nav-link"
              >
                {link.label}
                {activeId === link.href.replace('#', '') && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #00f5ff, #9b59ff)',
                    borderRadius: '1px',
                  }} />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="hamburger-btn"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'none',
            padding: '0.25rem',
            display: 'none',
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'rgba(5,8,20,0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s',
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.8rem',
              color: activeId === link.href.replace('#', '') ? '#00f5ff' : 'var(--text-primary)',
              textDecoration: 'none',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ${i * 0.06}s, transform 0.4s ${i * 0.06}s, color 0.2s`,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        .nav-link:hover { color: #00f5ff !important; }
      `}</style>
    </>
  )
}
