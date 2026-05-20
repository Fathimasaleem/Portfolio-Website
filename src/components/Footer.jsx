import { GitBranch, Link2, Mail, Heart } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

const SOCIALS = [
  { Icon: Link2,     href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { Icon: GitBranch, href: 'https://github.com/yourusername',      label: 'GitHub'   },
  { Icon: Mail,     href: 'mailto:your.email@example.com',        label: 'Email'    },
]

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 })
    else el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '3.5rem clamp(1.5rem, 6vw, 8rem) 2rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Logo */}
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '1.8rem',
          background: 'linear-gradient(135deg, #00f5ff, #9b59ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '0.4rem',
        }}>FAS</div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          color: 'var(--text-dim)',
          marginBottom: '2rem',
        }}>AI & Machine Learning Engineer</p>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem 1.5rem',
            listStyle: 'none',
            padding: 0,
            margin: '0 0 2rem',
          }}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--text-dim)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  className="footer-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '2rem',
        }}>
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-dim)',
                transition: 'color 0.25s, border-color 0.25s, box-shadow 0.25s',
                textDecoration: 'none',
              }}
              className="footer-social"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--border-subtle), transparent)',
          marginBottom: '1.5rem',
        }} />

        {/* Copyright */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.78rem',
          color: 'var(--text-dim)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.3rem',
          flexWrap: 'wrap',
        }}>
          © {new Date().getFullYear()} FATHIMA A S · Built with
          <Heart size={12} color="#9b59ff" style={{ fill: '#9b59ff' }} />
          and React
        </p>
      </div>

      <style>{`
        .footer-link:hover { color: #00f5ff !important; }
        .footer-social:hover {
          color: #00f5ff !important;
          border-color: rgba(0,245,255,0.4) !important;
          box-shadow: 0 0 12px rgba(0,245,255,0.2) !important;
        }
      `}</style>
    </footer>
  )
}
