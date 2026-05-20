import { useEffect, useRef } from 'react'
import { GitBranch, Link2, Mail, ChevronDown, Download, Eye, MessageSquare } from 'lucide-react'
import ParticleCanvas from './ParticleCanvas'

const TITLES = [
  'AI & Machine Learning Engineer',
  'Computer Vision Enthusiast',
  'Generative AI Developer',
  'Deep Learning Engineer',
]

const SKILL_TAGS = [
  { label: 'Deep Learning', delay: '0s', x: '-130px', y: '-60px' },
  { label: 'Computer Vision', delay: '0.5s', x: '110px', y: '-80px' },
  { label: 'Generative AI', delay: '1s', x: '-110px', y: '70px' },
]

export default function Hero() {
  const scrollDown = () => {
    const el = document.getElementById('about')
    if (el) {
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 })
      else el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse 80% 60% at 10% 50%, rgba(0,245,255,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 90% 30%, rgba(155,89,255,0.07) 0%, transparent 60%),
          var(--bg-primary)
        `,
        padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 6vw, 8rem) 4rem',
      }}
    >
      <ParticleCanvas />

      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4rem',
        alignItems: 'center',
      }}
        className="hero-grid"
      >
        {/* ── Left: Text Content ── */}
        <div>
          {/* Available badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            border: '1px solid rgba(0,245,255,0.3)',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            animation: 'pulse-glow 2.5s ease-in-out infinite',
            background: 'rgba(0,245,255,0.05)',
          }}>
            <span style={{
              width: '8px', height: '8px',
              borderRadius: '50%',
              background: '#00f5ff',
              boxShadow: '0 0 8px #00f5ff',
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: '#00f5ff',
              letterSpacing: '0.05em',
            }}>
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              lineHeight: 1.05,
              marginBottom: '1rem',
              color: 'var(--text-primary)',
            }}
          >
            FATHIMA{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00f5ff 0%, #9b59ff 60%, #4f8ef7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>A S</span>
          </h1>

          {/* Rotating title */}
          <div style={{
            height: '2rem',
            overflow: 'hidden',
            marginBottom: '1.5rem',
            position: 'relative',
          }}>
            {TITLES.map((title, i) => (
              <p
                key={title}
                aria-hidden={i !== 0}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  animation: `title-rotate ${TITLES.length * 3}s ${i * 3}s infinite`,
                  opacity: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ color: 'var(--cyan)' }}>{'// '}</span>
                {title}
              </p>
            ))}
          </div>

          {/* Bio */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            maxWidth: '540px',
            marginBottom: '2.5rem',
          }}>
            AI & ML Engineer passionate about building intelligent systems that bridge the gap between research and real-world impact. Specializing in Generative AI, Computer Vision, and Deep Learning at{' '}
            <span style={{ color: 'var(--cyan)', fontWeight: 500 }}>Soften Technologies</span>.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('projects')
                if (el) {
                  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 })
                  else el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-primary"
              id="hero-view-projects"
            >
              <Eye size={16} />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-outline"
              id="hero-download-resume"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('contact')
                if (el) {
                  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 })
                  else el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-outline"
              id="hero-contact"
            >
              <MessageSquare size={16} />
              Contact Me
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[
              { href: 'https://linkedin.com/in/fathimasalim2002', Icon: Link2, label: 'LinkedIn' },
              { href: 'https://github.com/Fathimasaleem', Icon: GitBranch, label: 'GitHub' },
              { href: 'mailto:asfathima2002@gmail.com', Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'color 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s',
                  textDecoration: 'none',
                }}
                className="social-icon-btn"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: Avatar ── */}
        <div
          className="hero-avatar-wrap"
          style={{
            position: 'relative',
            width: '280px',
            height: '280px',
            flexShrink: 0,
          }}
        >
          {/* Spinning gradient border */}
          <div style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00f5ff, #9b59ff, #4f8ef7, #00f5ff)',
            animation: 'spin-slow 4s linear infinite',
            zIndex: 0,
          }} />
          {/* Inner white ring */}
          <div style={{
            position: 'absolute',
            inset: '3px',
            borderRadius: '50%',
            background: 'var(--bg-primary)',
            zIndex: 1,
          }} />
          {/* Avatar image placeholder */}
          <div style={{
            position: 'absolute',
            inset: '10px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(155,89,255,0.1))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            overflow: 'hidden',
          }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '4rem',
              background: 'linear-gradient(135deg, #00f5ff, #9b59ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>FAS</span>
          </div>

          {/* Floating skill tags */}
          {SKILL_TAGS.map(({ label, delay, x, y }) => (
            <div
              key={label}
              className="skill-float-tag"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(calc(-50% + ${x}), calc(-50% + ${y}))`,
                background: 'rgba(8,13,26,0.85)',
                border: '1px solid rgba(0,245,255,0.25)',
                borderRadius: '50px',
                padding: '0.3rem 0.85rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#00f5ff',
                whiteSpace: 'nowrap',
                animation: `float 3.5s ${delay} ease-in-out infinite`,
                zIndex: 3,
                backdropFilter: 'blur(8px)',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          cursor: 'none',
          zIndex: 1,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          color: 'var(--text-dim)',
          textTransform: 'uppercase',
        }}>Scroll</span>
        <ChevronDown
          size={20}
          color="var(--text-dim)"
          style={{ animation: 'bounce-down 1.8s ease-in-out infinite' }}
        />
      </button>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-avatar-wrap {
            width: 200px !important;
            height: 200px !important;
            margin: 0 auto;
          }
          .skill-float-tag { display: none !important; }
        }
        .social-icon-btn:hover {
          color: #00f5ff !important;
          border-color: rgba(0,245,255,0.5) !important;
          box-shadow: 0 0 16px rgba(0,245,255,0.2) !important;
          transform: translateY(-3px) !important;
        }
      `}</style>
    </section>
  )
}
