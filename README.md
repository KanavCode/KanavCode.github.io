# kanavmodi.me

Personal portfolio website — minimal, terminal-inspired, built for speed.

**Live:** [kanavmodi.me](https://kanavmodi.me)

---

## Tech Stack

- **Framework:** Next.js 14 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** JetBrains Mono + Inter
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build static export
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to preview locally.

## Project Structure

```
app/
├── layout.tsx          # Root layout, fonts, metadata
├── page.tsx            # Main page — imports all sections
└── globals.css         # Tailwind + custom CSS (glitch, noise, cursor)

components/
├── Navbar.tsx          # Fixed top nav with mobile hamburger
├── Hero.tsx            # Typing animation, name, tagline
├── About.tsx           # Bio + skills terminal list
├── Projects.tsx        # 2x2 project card grid
├── Experience.tsx      # Timeline — work + education
├── Resume.tsx          # PDF download CTA
├── Contact.tsx         # Email CTA + social links
├── Footer.tsx          # Minimal footer
├── CustomCursor.tsx    # Amber glow cursor (desktop only)
└── NoiseOverlay.tsx    # Grain texture overlay

public/
├── CNAME               # Custom domain: kanavmodi.me
├── .nojekyll           # Bypasses Jekyll on GitHub Pages
└── resume.pdf          # Your resume PDF (replace with real file)
```

## Editing Content

All personal details are marked with `// EDIT:` comments throughout the codebase.

**Quick search:** `Ctrl+Shift+F` → `// EDIT:` in VS Code.

See [EDIT-GUIDE.md](EDIT-GUIDE.md) for a full reference of what to edit and where.

## Deployment

Pushes to `main` branch auto-deploy via GitHub Actions → GitHub Pages.

**Requirements:**
1. In your GitHub repo, go to **Settings → Pages → Source** → select **GitHub Actions**
2. Push to `main` — the workflow builds and deploys automatically
3. Custom domain `kanavmodi.me` is preserved via `public/CNAME`

## License

MIT
