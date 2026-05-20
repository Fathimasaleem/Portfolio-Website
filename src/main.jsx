import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './styles/globals.css'
import App from './App.jsx'

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Expose lenis globally for components that need it
window.__lenis = lenis

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
