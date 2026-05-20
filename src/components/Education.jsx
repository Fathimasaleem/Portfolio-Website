import { GraduationCap, Award, Calendar } from 'lucide-react'

export default function Education() {
  return (
    <section
      id="education"
      className="section"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at 50% 50%, rgba(155,89,255,0.05), transparent 60%),
          var(--bg-secondary)
        `,
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">Academic background</p>
          <h2 className="section-title">Education</h2>
          <div className="gradient-line" style={{ margin: '1rem auto 0' }} />
        </div>

        <div
          className="glass-card reveal"
          style={{ padding: '3rem 2.5rem', position: 'relative', overflow: 'hidden' }}
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute',
            top: '-60px', left: '50%',
            transform: 'translateX(-50%)',
            width: '200px', height: '200px',
            background: 'radial-gradient(ellipse, rgba(155,89,255,0.12), transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Institution icon */}
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(155,89,255,0.15))',
            border: '1px solid rgba(0,245,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.75rem',
          }}>
            <GraduationCap size={32} color="#00f5ff" />
          </div>

          {/* University */}
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
            lineHeight: 1.3,
          }}>
            APJ Abdul Kalam Technological University
          </h3>

          {/* Degree */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-muted)',
            marginBottom: '1.5rem',
          }}>
            Bachelor of Technology — Computer Science & Engineering
          </p>

          {/* Info row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.75rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
            }}>
              <Calendar size={15} color="var(--text-dim)" />
              2021 – 2025
            </div>
          </div>

          {/* CGPA badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.6rem 1.5rem',
            background: 'rgba(0,245,255,0.08)',
            border: '1px solid rgba(0,245,255,0.25)',
            borderRadius: '50px',
            marginBottom: '0.75rem',
          }}>
            <Award size={16} color="#00f5ff" />
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#00f5ff',
            }}>CGPA 7.54</span>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
            }}>· First Class</span>
          </div>

          {/* Divider */}
          <div style={{
            width: '40px',
            height: '2px',
            background: 'linear-gradient(90deg, var(--cyan), var(--violet))',
            borderRadius: '1px',
            margin: '1.25rem auto 0',
          }} />
        </div>
      </div>
    </section>
  )
}
