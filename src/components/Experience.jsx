const EXPERIENCES = [
  {
    company: 'Soften Technologies',
    role: 'Software Development Intern',
    period: 'Jan 2025 – Present',
    color: 'var(--cyan)',
    bullets: [
      'pix2pix GAN sketch-to-image generation pipeline',
      'TensorFlow / PyTorch deep learning model development',
      'Image preprocessing and data augmentation workflows',
      'Computer vision application development',
      'REST APIs for ML inference systems',
    ],
  },
  {
    company: 'Google Developer Student Clubs',
    role: 'WIT Lead',
    period: 'Jun 2023 – Jun 2024',
    color: 'var(--violet)',
    bullets: [
      'Organized workshops and mentorship programs for students',
      'Championed women-in-technology initiatives on campus',
      'Coordinated technical community events and speaker sessions',
    ],
  },
  {
    company: 'Emergency Connect',
    role: 'Frontend Developer',
    period: 'Feb 2024 – May 2024',
    color: 'var(--blue)',
    bullets: [
      'Built a responsive emergency web application from scratch',
      'Implemented modern frontend UI with HTML / CSS / JS',
      'Improved accessibility and cross-device usability',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      {/* BG radial */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: '10%',
        width: '500px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(0,245,255,0.04), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p className="section-label">Where I've worked</p>
          <h2 className="section-title">Experience</h2>
          <div className="gradient-line" />
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical gradient line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: '8px',
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, var(--cyan), var(--violet), var(--blue))',
            borderRadius: '1px',
          }} />

          {EXPERIENCES.map(({ company, role, period, color, bullets }, i) => (
            <div
              key={company}
              className="reveal"
              style={{
                position: 'relative',
                paddingLeft: '2.5rem',
                paddingBottom: i < EXPERIENCES.length - 1 ? '3.5rem' : 0,
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-2.5rem',
                top: '6px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: color,
                boxShadow: `0 0 14px ${color === 'var(--cyan)' ? 'rgba(0,245,255,0.6)' : color === 'var(--violet)' ? 'rgba(155,89,255,0.6)' : 'rgba(79,142,247,0.6)'}`,
                border: '2px solid var(--bg-primary)',
                zIndex: 1,
              }} />

              {/* Card */}
              <div className="glass-card" style={{ padding: '1.75rem' }}>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '0.5rem',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: color,
                  }}>{company}</h3>
                  <span style={{
                    fontFamily: '"DM Mono", "Courier New", monospace',
                    fontSize: '0.75rem',
                    color: 'var(--text-dim)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    padding: '0.2rem 0.6rem',
                    whiteSpace: 'nowrap',
                  }}>{period}</span>
                </div>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  marginBottom: '1.1rem',
                }}>{role}</p>

                {/* Bullets */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {bullets.map((b) => (
                    <li key={b} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.65,
                      marginBottom: '0.45rem',
                    }}>
                      <span style={{
                        color: color,
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: '1px',
                      }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
