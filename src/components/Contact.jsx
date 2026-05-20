import { useState } from 'react'
import { Mail, Link2, GitBranch, Send, CheckCircle } from 'lucide-react'

const CONTACT_INFO = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'asfathima2002@gmail.com',
    href: 'mailto:asfathima2002@gmail.com',
    color: '#00f5ff',
  },
  {
    Icon: Link2,
    label: 'LinkedIn',
    value: 'linkedin.com/in/fathimasalim2002',
    href: 'https://linkedin.com/in/fathimasalim2002',
    color: '#4f8ef7',
  },
  {
    Icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/Fathimasaleem',
    href: 'https://github.com/Fathimasaleem',
    color: '#9b59ff',
  },
]

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '10px',
  padding: '0.85rem 1.1rem',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.25s, box-shadow 0.25s',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Static success state (no backend)
    setSent(true)
  }

  return (
    <section id="contact" className="section">
      {/* Background */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(0,245,255,0.04), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Contact</h2>
          <div className="gradient-line" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}
          className="contact-grid"
        >
          {/* Left — headline + info */}
          <div className="reveal">
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.25,
              marginBottom: '1.5rem',
            }}>
              Let's build{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--cyan), var(--violet))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                intelligent solutions
              </span>{' '}
              together.
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
            }}>
              I'm always open to discussing exciting AI projects, research opportunities, or potential roles. Drop me a message — I'll get back to you as soon as possible!
            </p>

            {/* Contact info rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {CONTACT_INFO.map(({ Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={`${label}: ${value}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'border-color 0.25s, box-shadow 0.25s, background 0.25s',
                  }}
                  className="contact-row"
                >
                  <div style={{
                    width: '40px', height: '40px',
                    borderRadius: '10px',
                    background: `${color}18`,
                    border: `1px solid ${color}33`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color={color} />
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      color: 'var(--text-dim)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}>{label}</p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                    }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass-card reveal" style={{ padding: '2rem', transitionDelay: '0.15s' }}>
            {sent ? (
              /* Success state */
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '1rem',
                padding: '2rem 0',
              }}>
                <div style={{
                  width: '64px', height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(0,245,255,0.1)',
                  border: '1px solid rgba(0,245,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }}>
                  <CheckCircle size={30} color="#00f5ff" />
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: 'var(--text-primary)',
                }}>Message Sent!</h4>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}>
                  Thanks for reaching out, {form.name || 'there'}! I'll get back to you soon.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="btn-outline"
                  style={{ marginTop: '0.5rem' }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'FATHIMA A S' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Let\'s collaborate on AI...' },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label
                      htmlFor={`contact-${name}`}
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                        marginBottom: '0.4rem',
                        letterSpacing: '0.05em',
                      }}
                    >{label}</label>
                    <input
                      id={`contact-${name}`}
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      value={form[name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(name)}
                      onBlur={() => setFocused('')}
                      required
                      style={{
                        ...inputStyle,
                        borderColor: focused === name ? 'rgba(0,245,255,0.4)' : 'var(--border-subtle)',
                        boxShadow: focused === name ? '0 0 15px rgba(0,245,255,0.1)' : 'none',
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem',
                      letterSpacing: '0.05em',
                    }}
                  >Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    required
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '120px',
                      borderColor: focused === 'message' ? 'rgba(0,245,255,0.4)' : 'var(--border-subtle)',
                      boxShadow: focused === 'message' ? '0 0 15px rgba(0,245,255,0.1)' : 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  id="contact-send"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem' }}
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        .contact-row:hover {
          border-color: rgba(0,245,255,0.3) !important;
          background: rgba(0,245,255,0.03) !important;
          box-shadow: 0 0 20px rgba(0,245,255,0.08) !important;
        }
      `}</style>
    </section>
  )
}
