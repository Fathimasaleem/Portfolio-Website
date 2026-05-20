import { useEffect, useRef } from 'react'

const SKILLS = {
  'AI / ML': [
    { name: 'Machine Learning',  pct: 92 },
    { name: 'Deep Learning',     pct: 88 },
    { name: 'Computer Vision',   pct: 85 },
    { name: 'GANs',              pct: 80 },
    { name: 'TensorFlow',        pct: 82 },
    { name: 'PyTorch',           pct: 78 },
    { name: 'Data Science',      pct: 75 },
    { name: 'Image Processing',  pct: 83 },
  ],
  'Programming': [
    { name: 'Python',      pct: 92 },
    { name: 'SQL',         pct: 70 },
    { name: 'C',           pct: 65 },
    { name: 'HTML',        pct: 82 },
    { name: 'CSS',         pct: 80 },
    { name: 'JavaScript',  pct: 75 },
  ],
  'Tools & Platforms': [
    { name: 'Git / GitHub',            pct: 88 },
    { name: 'Google Cloud Platform',   pct: 72 },
    { name: 'REST APIs',               pct: 80 },
    { name: 'VS Code',                 pct: 90 },
  ],
}

const COL_ACCENT = ['var(--cyan)', 'var(--violet)', 'var(--blue)']

function SkillBar({ name, pct, accent, delay }) {
  const barRef = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const bar = barRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          bar.style.transition = `transform 1.2s ${delay}ms cubic-bezier(0.25,0.46,0.45,0.94)`
          bar.style.transform  = `scaleX(${pct / 100})`
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(bar)
    return () => observer.disconnect()
  }, [pct, delay])

  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.4rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--text-primary)',
        }}>{name}</span>
        <span style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.8rem',
          color: accent,
          fontWeight: 600,
        }}>{pct}%</span>
      </div>
      {/* Track */}
      <div style={{
        height: '6px',
        borderRadius: '3px',
        background: 'rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}>
        {/* Fill */}
        <div
          ref={barRef}
          style={{
            height: '100%',
            borderRadius: '3px',
            background: `linear-gradient(90deg, ${accent}, ${accent === 'var(--cyan)' ? 'var(--blue)' : accent === 'var(--violet)' ? 'var(--cyan)' : 'var(--violet)'})`,
            transformOrigin: 'left',
            transform: 'scaleX(0)',
            boxShadow: `0 0 8px ${accent === 'var(--cyan)' ? 'rgba(0,245,255,0.4)' : accent === 'var(--violet)' ? 'rgba(155,89,255,0.4)' : 'rgba(79,142,247,0.4)'}`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const categories = Object.entries(SKILLS)

  return (
    <section
      id="skills"
      className="section"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,245,255,0.04), transparent 60%),
          var(--bg-secondary)
        `,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <p className="section-label">What I bring to the table</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="gradient-line" style={{ margin: '1rem auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
        className="skills-grid"
        >
          {categories.map(([category, skills], ci) => (
            <div
              key={category}
              className="glass-card reveal"
              style={{
                padding: '2rem',
                transitionDelay: `${ci * 0.15}s`,
              }}
            >
              {/* Category header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.75rem',
              }}>
                <div style={{
                  width: '4px',
                  height: '28px',
                  borderRadius: '2px',
                  background: `linear-gradient(180deg, ${COL_ACCENT[ci]}, transparent)`,
                }} />
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: COL_ACCENT[ci],
                }}>{category}</h3>
              </div>

              {/* Skill bars */}
              {skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  pct={skill.pct}
                  accent={COL_ACCENT[ci]}
                  delay={ci * 150 + si * 80}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
