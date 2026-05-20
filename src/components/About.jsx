import { useEffect, useRef } from 'react'
import { GraduationCap, Briefcase, Brain } from 'lucide-react'

const STATS = [
  { value: 10, suffix: '+', label: 'AI Projects' },
  { value: 6,  suffix: '',  label: 'Certifications' },
  { value: 3,  suffix: '',  label: 'Internships' },
  { value: 2,  suffix: '',  label: 'Leadership Roles' },
]

const INFO_CARDS = [
  {
    Icon: GraduationCap,
    title: 'Education',
    desc: 'B.Tech CSE — APJ Abdul Kalam Technological University\nCGPA 7.54 · 2021–2025',
    color: 'var(--cyan)',
  },
  {
    Icon: Briefcase,
    title: 'Current Role',
    desc: 'Software Development Intern\nSoften Technologies · Jan 2025–Present',
    color: 'var(--violet)',
  },
  {
    Icon: Brain,
    title: 'AI Specialization',
    desc: 'Generative AI · GANs\nComputer Vision · Deep Learning',
    color: 'var(--blue)',
  },
]

function CountUp({ target, suffix }) {
  const ref    = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const dur   = 1800
          const start = performance.now()
          const tick  = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / dur, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = Math.round(eased * target) + suffix
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])

  return (
    <span ref={ref} style={{
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      background: 'linear-gradient(135deg, var(--cyan), var(--violet))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>0{suffix}</span>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%', right: 0,
        width: '400px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(155,89,255,0.06), transparent 70%)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="gradient-line" />
        </div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}
        className="about-grid"
        >
          {/* Left — Bio + stats */}
          <div>
            <p className="reveal" style={{
              color: 'var(--text-muted)',
              lineHeight: 1.85,
              marginBottom: '1.5rem',
              fontSize: '1.02rem',
            }}>
              I'm an AI & Machine Learning Engineer with a deep passion for building systems that can see, understand, and generate the world around us. Currently interning at{' '}
              <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>Soften Technologies</span>, where I architect end-to-end deep learning pipelines for sketch-to-image translation using conditional GANs.
            </p>
            <p className="reveal" style={{
              color: 'var(--text-muted)',
              lineHeight: 1.85,
              marginBottom: '2.5rem',
              fontSize: '1.02rem',
              transitionDelay: '0.1s',
            }}>
              My journey spans Computer Vision, Generative AI, and real-world ML deployment. I believe the most powerful AI is the kind that solves genuine human problems — from cashier-free smart shopping to emergency communication platforms. I'm always seeking the intersection of cutting-edge research and scalable impact.
            </p>

            {/* Stats grid */}
            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              transitionDelay: '0.2s',
            }}>
              {STATS.map(({ value, suffix, label }) => (
                <div
                  key={label}
                  className="glass-card"
                  style={{ padding: '1.5rem', textAlign: 'center' }}
                >
                  <CountUp target={value} suffix={suffix} />
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.3rem',
                  }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {INFO_CARDS.map(({ Icon, title, desc, color }, i) => (
              <div
                key={title}
                className="glass-card reveal"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: `rgba(${color === 'var(--cyan)' ? '0,245,255' : color === 'var(--violet)' ? '155,89,255' : '79,142,247'}, 0.12)`,
                  border: `1px solid rgba(${color === 'var(--cyan)' ? '0,245,255' : color === 'var(--violet)' ? '155,89,255' : '79,142,247'}, 0.25)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={20} color={color === 'var(--cyan)' ? '#00f5ff' : color === 'var(--violet)' ? '#9b59ff' : '#4f8ef7'} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.3rem',
                  }}>{title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                  }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
