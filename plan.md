# FATHIMA A S — Portfolio Website — Plan

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | React 18 + Vite                     |
| Styling      | Tailwind CSS v4 + CSS custom props  |
| Animations   | Framer Motion + GSAP + CSS keyframes|
| Scroll       | Lenis (smooth inertial scrolling)   |
| Icons        | Lucide React                        |
| Canvas       | Vanilla JS `<canvas>`               |
| Fonts        | Syne 800 + DM Sans (Google Fonts)   |
| Deploy       | Vercel / Netlify                    |

## File Structure

```
src/
  components/
    ParticleCanvas.jsx  ← canvas particle network
    ScrollToTop.jsx     ← fixed button
    Navbar.jsx          ← sticky + hamburger
    Hero.jsx            ← full viewport hero
    About.jsx           ← split layout + stats
    Skills.jsx          ← 3-col skill bars
    Experience.jsx      ← vertical timeline
    Projects.jsx        ← featured + 2-col grid
    Certifications.jsx  ← glassmorphism 3-col
    Education.jsx       ← centered card
    Contact.jsx         ← 2-col + form
    Footer.jsx
  styles/
    globals.css         ← CSS variables, cursor, keyframes
  App.jsx               ← cursor logic, scroll reveal
  main.jsx              ← Lenis init
```

## Design Tokens

| Token            | Value       |
|------------------|-------------|
| bg-primary       | #050814     |
| bg-secondary     | #080d1a     |
| accent-cyan      | #00f5ff     |
| accent-violet    | #9b59ff     |
| accent-blue      | #4f8ef7     |
| font-heading     | Syne 800    |
| font-body        | DM Sans     |

## Section Build Order

1. Config files (vite, tailwind, index.html)
2. globals.css
3. main.jsx (Lenis)
4. App.jsx (cursor, scroll reveal)
5. ParticleCanvas.jsx
6. ScrollToTop.jsx
7. Navbar.jsx
8. Hero.jsx
9. About.jsx
10. Skills.jsx
11. Experience.jsx
12. Projects.jsx
13. Certifications.jsx
14. Education.jsx
15. Contact.jsx
16. Footer.jsx
17. README.md
