# Profilo — Lê Hồng Công

Personal portfolio website with cosmic background, GPA mountain chart, and smooth animations.

**Live:** [lehongcong.com](#) *(update after deploy)*

## Preview

![Portfolio Preview](public/avatar.jpg)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Tech Stack

| Tech | Purpose |
|------|---------|
| React 19 | UI framework |
| Vite 8 | Build tool |
| TailwindCSS 4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |

## Features

- Cosmic background (starfield, nebula, solar systems, shooting stars)
- Custom cursor with hover effects (desktop only)
- Hero section with typing role animation + profile photo
- GPA Mountain Chart — SVG line chart with hover tooltips
- Skills with tech icons from devicons CDN
- Project cards with real GitHub links
- Smooth scroll navigation with scroll-spy
- Responsive: mobile, tablet, desktop
- SEO: meta tags, Open Graph, Twitter Card, JSON-LD

## Project Structure

```
src/
├── components/
│   ├── common/       # CosmicBackground, GPAChart, RadarChart, CustomCursor
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Projects, Skills, Education, Contact
│   └── ui/           # CountUp, ProgressBar, Toast, Modal, SocialIcons
├── data/
│   └── portfolio.js  # All content here — edit this file to customize
├── hooks/            # useScrollSpy, useTheme
├── styles/           # globals.css, cosmic-background.css
├── App.jsx
└── main.jsx
```

## Customize Content

All content is in **one file**: `src/data/portfolio.js`

- `personalInfo` — name, email, links, avatar
- `aboutData` — bio, stats, services
- `projectsData` — projects + categories
- `skillsData` — skills, radar chart, tools
- `educationData` — university, GPA semesters, certifications
- `contactData` — heading, subtitle, availability

## Add Images

| Image | Path |
|-------|------|
| Profile photo | `public/avatar.jpg` |
| Project screenshots | `public/projects/*.png` |
| Resume/CV | `public/resume.pdf` |
| OG image (social share) | `public/og-image.jpg` |

## Build & Deploy

```bash
npm run build      # Production build → dist/
npm run preview    # Preview locally
```

### Deploy on Vercel (recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → import repo
3. Deploy — done!

### Custom Domain

Add DNS records pointing to Vercel:
- `A` record: `@` → `76.76.21.21`
- `CNAME` record: `www` → `cname.vercel-dns.com`

Then add your domain in Vercel → Project Settings → Domains.

## Author

**Lê Hồng Công** — Backend Developer Intern

- GitHub: [Congle666](https://github.com/Congle666)
- Facebook: [cleee666](https://www.facebook.com/cleee666)
- Email: lhc09062004@gmail.com
