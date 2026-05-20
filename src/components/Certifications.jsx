import { Shield, Cloud, Cpu, Code, Database, Globe } from 'lucide-react'

const CERTS = [
  {
    issuer: 'Google',
    title: 'Cybersecurity Professional',
    Icon: Shield,
    color: '#00f5ff',
    bg: 'rgba(0,245,255,0.08)',
    border: 'rgba(0,245,255,0.2)',
  },
  {
    issuer: 'Google',
    title: 'Cloud Computing Foundations',
    Icon: Cloud,
    color: '#4f8ef7',
    bg: 'rgba(79,142,247,0.08)',
    border: 'rgba(79,142,247,0.2)',
  },
  {
    issuer: 'Google',
    title: 'Introduction to Generative AI',
    Icon: Cpu,
    color: '#9b59ff',
    bg: 'rgba(155,89,255,0.08)',
    border: 'rgba(155,89,255,0.2)',
  },
  {
    issuer: 'IBM',
    title: 'Python for Data Science',
    Icon: Code,
    color: '#00f5ff',
    bg: 'rgba(0,245,255,0.08)',
    border: 'rgba(0,245,255,0.2)',
  },
  {
    issuer: 'IBM',
    title: 'Python Project for Data Science',
    Icon: Database,
    color: '#4f8ef7',
    bg: 'rgba(79,142,247,0.08)',
    border: 'rgba(79,142,247,0.2)',
  },
  {
    issuer: 'Intel × Digital India',
    title: 'AI For All',
    Icon: Globe,
    color: '#9b59ff',
    bg: 'rgba(155,89,255,0.08)',
    border: 'rgba(155,89,255,0.2)',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      {/* Background radial */}
      <div style={{
        position: 'absolute',
        top: '30%', right: '5%',
        width: '350px', height: '350px',
        background: 'radial-gradient(ellipse, rgba(0,245,255,0.05), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <p className="section-label">Verified credentials</p>
          <h2 className="section-title">Certifications</h2>
          <div className="gradient-line" style={{ margin: '1rem auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }}
        className="certs-grid"
        >
          {CERTS.map(({ issuer, title, Icon, color, bg, border }, i) => (
            <div
              key={`${issuer}-${title}`}
              className="glass-card reveal"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transitionDelay: `${i * 0.08}s`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: 'absolute',
                top: 0, right: 0,
                width: '60px', height: '60px',
                background: `radial-gradient(circle at top right, ${color}22, transparent 70%)`,
              }} />

              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: bg,
                border: `1px solid ${border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon size={22} color={color} />
              </div>

              {/* Issuer */}
              <p style={{
                fontFamily: '"DM Mono", "Courier New", monospace',
                fontSize: '0.72rem',
                color: color,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}>{issuer}</p>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--text-primary)',
                lineHeight: 1.35,
              }}>{title}</h3>

              {/* Verified badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                marginTop: 'auto',
              }}>
                <div style={{
                  width: '6px', height: '6px',
                  borderRadius: '50%',
                  background: color,
                }} />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  color: 'var(--text-dim)',
                }}>Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .certs-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .certs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
