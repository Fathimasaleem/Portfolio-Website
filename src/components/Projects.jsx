import { GitBranch, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    id: 'pix2pix',
    featured: true,
    title: 'Sketch to Realistic Image using pix2pix GAN',
    tags: ['Python', 'TensorFlow / PyTorch', 'OpenCV', 'Deep Learning'],
    description:
      'Conditional GAN system that translates hand-drawn sketches into photorealistic images. Implements a U-Net Generator paired with a PatchGAN Discriminator for high-fidelity image synthesis, evaluated with FID and SSIM metrics.',
    chips: ['U-Net Generator', 'PatchGAN Discriminator', 'Image Translation', 'Data Augmentation', 'FID & SSIM Metrics'],
    accent: 'var(--cyan)',
    github: 'https://github.com/yourusername',
    demo: null,
  },
  {
    id: 'smart',
    featured: false,
    title: 'S-Mart — Cashier-Free Smart Shopping',
    tags: ['Computer Vision', 'Object Detection', 'ML'],
    description:
      'Real-time computer vision-based cashier-free retail system. Uses object detection for automated product recognition and seamless billing without human intervention.',
    chips: ['Real-time Detection', 'Auto Checkout', 'ML-Powered'],
    accent: 'var(--violet)',
    github: 'https://github.com/yourusername',
    demo: null,
  },
  {
    id: 'emergency',
    featured: false,
    title: 'Emergency Connect',
    tags: ['HTML / CSS / JS', 'Responsive', 'Accessible'],
    description:
      'Emergency communication platform built with accessibility-first design principles. Features responsive layouts and mobile-first UI for reliable access in critical situations.',
    chips: ['Responsive UI', 'A11y', 'Mobile-First'],
    accent: 'var(--blue)',
    github: 'https://github.com/yourusername',
    demo: null,
  },
]

function ProjectCard({ project, featured }) {
  const { title, tags, description, chips, accent, github, demo } = project
  const accentRaw = accent === 'var(--cyan)' ? '#00f5ff' : accent === 'var(--violet)' ? '#9b59ff' : '#4f8ef7'

  return (
    <div
      className="glass-card"
      style={{
        padding: featured ? '2.25rem' : '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        gridColumn: featured ? '1 / -1' : undefined,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated scan-line preview area */}
      <div style={{
        position: 'relative',
        height: featured ? '180px' : '140px',
        borderRadius: '10px',
        overflow: 'hidden',
        background: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 28px,
            rgba(${accent === 'var(--cyan)' ? '0,245,255' : accent === 'var(--violet)' ? '155,89,255' : '79,142,247'},0.05) 28px,
            rgba(${accent === 'var(--cyan)' ? '0,245,255' : accent === 'var(--violet)' ? '155,89,255' : '79,142,247'},0.05) 29px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 28px,
            rgba(${accent === 'var(--cyan)' ? '0,245,255' : accent === 'var(--violet)' ? '155,89,255' : '79,142,247'},0.05) 28px,
            rgba(${accent === 'var(--cyan)' ? '0,245,255' : accent === 'var(--violet)' ? '155,89,255' : '79,142,247'},0.05) 29px
          ),
          linear-gradient(135deg, rgba(${accent === 'var(--cyan)' ? '0,245,255' : accent === 'var(--violet)' ? '155,89,255' : '79,142,247'},0.08), rgba(8,13,26,0.9))
        `,
      }}>
        {/* Scan line */}
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${accentRaw}, transparent)`,
          animation: 'scan 2.5s linear infinite',
          opacity: 0.6,
        }} />
        {/* Label */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.7rem',
            color: accentRaw,
            letterSpacing: '0.2em',
            opacity: 0.5,
            textTransform: 'uppercase',
          }}>
            {featured ? '// featured project' : '// project'}
          </span>
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.7rem',
            color: accentRaw,
            background: `rgba(${accent === 'var(--cyan)' ? '0,245,255' : accent === 'var(--violet)' ? '155,89,255' : '79,142,247'}, 0.1)`,
            border: `1px solid rgba(${accent === 'var(--cyan)' ? '0,245,255' : accent === 'var(--violet)' ? '155,89,255' : '79,142,247'}, 0.25)`,
            borderRadius: '4px',
            padding: '0.2rem 0.55rem',
          }}>{tag}</span>
        ))}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: featured ? '1.35rem' : '1.05rem',
        color: 'var(--text-primary)',
        lineHeight: 1.3,
      }}>{title}</h3>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        lineHeight: 1.7,
        flex: 1,
      }}>{description}</p>

      {/* Feature chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {chips.map(chip => (
          <span key={chip} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 500,
            color: 'var(--text-muted)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50px',
            padding: '0.2rem 0.7rem',
          }}>{chip}</span>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${title}`}
            className="btn-outline"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem' }}
          >
            <GitBranch size={15} />
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo for ${title}`}
            className="btn-primary"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem' }}
          >
            <ExternalLink size={15} />
            Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = PROJECTS.find(p => p.featured)
  const rest     = PROJECTS.filter(p => !p.featured)

  return (
    <section
      id="projects"
      className="section"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at 80% 50%, rgba(155,89,255,0.05), transparent 60%),
          var(--bg-secondary)
        `,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">Things I've built</p>
          <h2 className="section-title">Projects</h2>
          <div className="gradient-line" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
        }}
        className="projects-grid"
        >
          {/* Featured spans full width */}
          {featured && (
            <div className="reveal" style={{ gridColumn: '1 / -1' }}>
              <ProjectCard project={featured} featured />
            </div>
          )}
          {/* Other two side by side */}
          {rest.map((project, i) => (
            <div key={project.id} className="reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <ProjectCard project={project} featured={false} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
