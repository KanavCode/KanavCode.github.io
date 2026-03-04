# ✏️ Edit Guide — Personal Details

Quick reference for every piece of personal content in the codebase.  
Search for `// EDIT:` comments in VS Code (`Ctrl+Shift+F` → `// EDIT:`) to jump to any editable field.

---

## 📄 SEO & Metadata

| What | File | Line Marker |
|------|------|-------------|
| Page title | `app/layout.tsx` | `// EDIT: Update metadata for SEO` |
| Meta description | `app/layout.tsx` | same block |
| Canonical URL | `app/layout.tsx` | same block |
| OG title / description | `app/layout.tsx` | same block |

---

## 🏠 Hero Section

| What | File | Variable |
|------|------|----------|
| Your name (large heading) | `components/Hero.tsx` | `NAME` |
| Tagline (typed out) | `components/Hero.tsx` | `TAGLINE` |
| Tech stack tags | `components/Hero.tsx` | `TECH_TAGS` |
| GitHub URL | `components/Hero.tsx` | `SOCIALS.github` |
| LinkedIn URL | `components/Hero.tsx` | `SOCIALS.linkedin` |
| Email (mailto) | `components/Hero.tsx` | `SOCIALS.email` |

---

## 👤 About Section

| What | File | Variable |
|------|------|----------|
| Bio paragraphs | `components/About.tsx` | `BIO` array |
| Skills list (grouped) | `components/About.tsx` | `SKILLS` array |
| Section heading | `components/About.tsx` | `// about.me` string |

---

## 🚀 Projects Section

| What | File | Variable |
|------|------|----------|
| Project cards (name, description, tech, GitHub link) | `components/Projects.tsx` | `PROJECTS` array |
| Section heading | `components/Projects.tsx` | `// projects.exe` string |

Each project object:
```ts
{
  name: "Project Name",
  description: "One-liner...",
  tech: ["React", "TypeScript", ...],
  github: "https://github.com/...",
}
```

To **add a new project**, duplicate an object in the `PROJECTS` array.  
To **remove a project**, delete its object from the array.

---

## 💼 Experience Section

| What | File | Variable |
|------|------|----------|
| Work experience entries | `components/Experience.tsx` | `WORK` array |
| Education entries | `components/Experience.tsx` | `EDUCATION` array |
| Section heading | `components/Experience.tsx` | `// experience.log` string |

Each work entry:
```ts
{
  company: "Company Name",
  role: "Your Role",
  period: "Start – End · Location",
  bullets: ["Achievement 1", "Achievement 2"],
}
```

---

## 📋 Resume Section

| What | File | Variable / Location |
|------|------|---------------------|
| Resume PDF file | `public/resume.pdf` | Replace this file with your actual PDF |
| Subtitle text | `components/Resume.tsx` | `SUBTITLE` |
| Last updated date | `components/Resume.tsx` | `LAST_UPDATED` |
| Section heading | `components/Resume.tsx` | `// resume.pdf` string |

---

## 📬 Contact Section

| What | File | Variable |
|------|------|----------|
| Contact text | `components/Contact.tsx` | `CONTACT_TEXT` |
| Email address | `components/Contact.tsx` | `EMAIL` |
| GitHub URL | `components/Contact.tsx` | `SOCIALS.github` |
| LinkedIn URL | `components/Contact.tsx` | `SOCIALS.linkedin` |
| Section heading | `components/Contact.tsx` | `// contact.sh` string |

---

## 🔗 Navbar

| What | File | Variable |
|------|------|----------|
| Logo / wordmark text | `components/Navbar.tsx` | `kanav_` in JSX |
| Nav link labels & targets | `components/Navbar.tsx` | `navLinks` array |

---

## 🦶 Footer

| What | File | Location |
|------|------|----------|
| Footer text (name, site URL) | `components/Footer.tsx` | `// EDIT: Footer text` |

---

## 🌐 Domain & Deployment

| What | File | Notes |
|------|------|-------|
| Custom domain | `public/CNAME` | Contains `kanavmodi.me` — change if domain changes |
| Static export config | `next.config.js` | `output: "export"` — do not remove |

---

## 🎨 Design Tokens (Colors, Fonts)

| What | File |
|------|------|
| Color palette | `tailwind.config.ts` → `theme.extend.colors` |
| Font families | `tailwind.config.ts` → `theme.extend.fontFamily` |
| Font imports (Google Fonts) | `app/layout.tsx` → `JetBrains_Mono`, `Inter` |
| Glitch animation CSS | `app/globals.css` → `.glitch` |
| Noise overlay opacity | `app/globals.css` → `.noise-overlay` `opacity` |
| Custom cursor glow | `app/globals.css` → `.custom-cursor` |

---

## Quick Workflow

1. Edit the relevant constant/variable in the file listed above
2. Run `npm run dev` to preview locally
3. Run `npm run build` to verify static export
4. `git add . && git commit -m "update" && git push` — GitHub Pages auto-deploys
