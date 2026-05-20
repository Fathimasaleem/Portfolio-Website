# FATHIMA A S — Portfolio Website

A production-ready dark-futuristic portfolio for an AI & Machine Learning Engineer.

## Tech Stack

- **React 18 + Vite** — fast dev/build
- **Tailwind CSS v4** — utility-first with CSS-first config
- **Framer Motion + GSAP** — animations
- **Lenis** — smooth scrolling
- **Lucide React** — icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization Checklist

Before deploying, update the following placeholders:

- [ ] **Email** — search `your.email@example.com` and replace
- [ ] **GitHub** — search `github.com/yourusername` and replace
- [ ] **LinkedIn** — search `linkedin.com/in/yourusername` and replace
- [ ] **Resume** — add your PDF as `public/resume.pdf`
- [ ] **Avatar** — optionally replace the "FAS" monogram in `Hero.jsx` with a real photo

## Project Structure

```
src/
  components/    All React section components
  styles/        globals.css with all CSS variables & animations
  App.jsx        App shell, cursor, scroll reveal
  main.jsx       Lenis smooth scroll init
```

## Deployment

### Vercel (recommended)
```bash
npx vercel --prod
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to Netlify UI
```

## License

MIT
