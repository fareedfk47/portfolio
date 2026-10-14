# Fareed Khan — Developer Portfolio

A personal developer portfolio for **Fareed Khan**, Full Stack Developer. Built with React 18, TypeScript, Tailwind CSS, and Vite.

## 🚀 Overview

- **Design System:** Obsidian Engineering aesthetic with deep obsidian tones (`#0B0E11`), hairline borders (`#242830`), inner rim bevels, luminous indigo (`#6366F1`) accents, Plus Jakarta Sans display headings, Inter body typography, and JetBrains Mono code telemetry.
- **Hero & Identity:** Verified LinkedIn Profile Card featuring real developer photo, "Open to Work" status indicator, current role at HostLelo, education, verified certifications, and direct connection actions.
- **Architectural Bento Grid:** 12-column modular system highlights, core technology chips, commit rhythm visual, and FinLedger spotlight.
- **Flagship Project:** In-depth technical breakdown of **FinLedger** (banking operations, idempotency keys, double-entry financial ledger, JWT with HTTP-only cookies, and security audit logs).
- **Verified Credentials:** Real internship contributions at HostLelo, B.Tech in CSE (Sobhasaria Group of Institutions / BTU), and authentic technical certifications.
- **Zero AI Artifacts:** 100% authentic developer credentials, zero generic chatbots or exaggerated statistics.

## 🛠 Tech Stack

- **Framework:** React 18 & TypeScript
- **Styling:** Tailwind CSS (Obsidian Theme `#0B0E11` & Indigo `#6366F1`)
- **Icons:** Lucide React
- **Build Tool:** Vite 6
- **Deployment:** Vercel ready (`vercel.json` configured with SPA rewrites & security headers)

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── Fareed_Khan_Resume.pdf  # Verified resume PDF document
│   ├── resume.pdf             # PDF alias for direct linking
│   ├── robots.txt             # Search engine crawler configuration
│   └── sitemap.xml            # XML sitemap for SEO discovery
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive sticky header with section tracking & resume trigger
│   │   ├── Hero.tsx           # Two-column hero with verified LinkedIn profile card
│   │   ├── LinkedInProfileCard.tsx # Authentic LinkedIn profile card with photo & certifications
│   │   ├── BentoOverview.tsx  # 12-column architectural overview grid
│   │   ├── FeaturedProject.tsx# Star centerpiece deep-dive into FinLedger
│   │   ├── OtherProjects.tsx  # Verified repositories (melodex-api, snake-arcade, GitHub-ProfileViewer)
│   │   ├── About.tsx          # Engineering narrative & core CS background
│   │   ├── Skills.tsx         # Categorized skills matrix with key technology badges
│   │   ├── Experience.tsx     # Full Stack Developer Intern at HostLelo timeline
│   │   ├── EducationCertifications.tsx # B.Tech degree & certified credentials
│   │   ├── Contact.tsx        # Direct mailto, copy-to-clipboard, GitHub & LinkedIn hubs
│   │   ├── Footer.tsx         # Minimal copyright & quick links
│   │   └── ResumeModal.tsx    # Accessible resume viewer and direct download modal
│   ├── data/
│   │   └── portfolioData.ts   # Central source of truth for all verified developer information
│   ├── types/
│   │   └── portfolio.ts       # TypeScript interfaces
│   ├── App.tsx                # Main view composition
│   ├── index.css              # Obsidian theme styling, custom scrollbars, card bevels
│   └── main.tsx               # React DOM bootstrap
├── vercel.json                # Vercel deployment configuration
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 💻 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build locally
```bash
npm run preview
```

## 🚢 Deployment to GitHub & Vercel

### GitHub
```bash
git add .
git commit -m "feat: complete personal portfolio ready for deployment"
git branch -M main
git remote add origin https://github.com/fareedfk47/<repo-name>.git
git push -u origin main
```

### Vercel
1. Import the GitHub repository into [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build` (configured automatically via `vercel.json`).
4. Output Directory: `dist`.
5. Deploy!
