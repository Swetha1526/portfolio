# Swetha B — Developer Portfolio

Production-ready, premium personal portfolio website for **Swetha B**, a final-year B.E. Computer Science and Engineering student graduating in 2027 from Asan Memorial College of Engineering and Technology (Chengalpattu, Tamil Nadu).

Targeted for **Python Developer** and **Full Stack Developer** internships and entry-level engineering roles.

---

## 🌟 Highlights & Features

- **Architectural Design System**: Custom Vanilla CSS design tokens with support for both **Dark** (Midnight/Charcoal with controlled glow) and **Light** (Warm neutral off-white with crisp indigo accents) themes.
- **Flawless Theme Switching**:
  - Instant toggle with Sun/Moon micro-animations.
  - Zero-flash theme initialization script in `<head>`.
  - Persisted in `localStorage`.
  - Respects OS system preference (`prefers-color-scheme`).
- **Mobile-First & Accessible**:
  - Fluid typography using CSS `clamp()`.
  - Fully responsive from small mobile (320px–375px) up to ultra-wide desktop screens (1600px+).
  - Accessible focus states (`:focus-visible`), skip-to-content landmark, semantic HTML5, screen-reader labels (`sr-only`), and `prefers-reduced-motion` compliance.
  - Accessible mobile drawer with keyboard ESC listener and backdrop blur.
- **Strictly Factual & Credible**:
  - **No invented proficiency percentages or fake badges**.
  - **Verified Major Projects & Repositories**:
    - [ApexMart](https://github.com/Swetha1526/ApexMarT) (Major Project 1 — Full-Stack E-Commerce)
    - [ConnectX](https://github.com/Swetha1526/ConnectX) (Major Project 2 — Real-Time Social & Chat Platform)
    - [Workmate](https://workmate-brown.vercel.app/) (Major Project 3 — Hourly Worker Hiring Platform)
  - Verified internship at **Inetz Technologies**.
  - Interactive "View Technical Architecture" deep-dive accordions for recruiters.
  - One-click copy email button with clipboard state feedback & native mailto client integration.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Vanilla CSS with custom properties (CSS design tokens)
- **Icons**: Lucide React + custom accessible SVGs
- **Fonts**: Google Fonts (`Plus Jakarta Sans` & `JetBrains Mono`)
- **Linting**: Oxlint

---

## 📁 Project Structure

```
swetha_portfolio/
├── dist/                     # Optimized static production build output
├── public/
│   ├── favicon.svg           # Custom branded SB monogram favicon
│   └── projects/             # High-resolution project showcase mockups
│       ├── apexmart.jpg      # GUVI Major Project 1 mockup
│       ├── connectx.jpg      # GUVI Major Project 2 mockup
│       ├── workmate.jpg
│       └── resume_analyzer.jpg
├── src/
│   ├── assets/               # Brand assets
│   ├── components/
│   │   ├── icons/            # SVG icons (GitHub, LinkedIn)
│   │   ├── About.jsx         # Academic background & narrative
│   │   ├── About.css
│   │   ├── Contact.jsx       # Real email copy & profile links
│   │   ├── Contact.css
│   │   ├── Education.jsx     # B.E. CSE degree, CGPA, & coursework
│   │   ├── Education.css
│   │   ├── ExperienceTimeline.jsx # Inetz Technologies & GUVI/QSpiders
│   │   ├── ExperienceTimeline.css
│   │   ├── Footer.jsx        # Dynamic year & back-to-top button
│   │   ├── Footer.css
│   │   ├── Hero.jsx          # Live availability beacon & developer card
│   │   ├── Hero.css
│   │   ├── Navbar.jsx        # Desktop nav & mobile drawer
│   │   ├── Navbar.css
│   │   ├── ProjectCard.jsx   # Project showcase & architecture expander
│   │   ├── ProjectCard.css
│   │   ├── Projects.jsx      # Major Projects: ApexMart, ConnectX & Workmate
│   │   ├── Projects.css
│   │   ├── Skills.jsx        # Categorized tech inventory with filters
│   │   ├── Skills.css
│   │   ├── ThemeToggle.jsx   # Accessible dark/light toggle button
│   │   └── ThemeToggle.css
│   ├── context/
│   │   ├── ThemeContext.jsx          # Theme state provider
│   │   ├── themeContextInstance.js   # Context instance
│   │   └── useTheme.js               # Custom hook
│   ├── App.jsx               # Main application layout
│   ├── index.css             # Design tokens, reset, typography & utilities
│   └── main.jsx              # React DOM entrypoint
├── index.html                # Anti-FOUC script, meta tags, & fonts
├── netlify.toml              # Netlify static deployment config
├── vercel.json               # Vercel static deployment config
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or newer recommended, tested on v24.19)
- npm (v9 or newer, tested on v11.17)

### Installation
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
```
This generates the optimized static bundle in the `dist/` directory.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

The project is pre-configured for instant zero-configuration deployment to **Vercel** or **Netlify**.

### Deploy to Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or push the repository to GitHub.
2. In the Vercel Dashboard, import the repository.
3. Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. The `vercel.json` file in the root will automatically manage URL rewrites and asset caching.

### Deploy to Netlify
1. Connect your GitHub repository to Netlify.
2. Build Settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Click **Deploy Site**. The `netlify.toml` file in the root will automatically handle single-page routing and caching headers.

---

## 📬 Contact Details for Swetha B

- **Email**: [swetha151105@gmail.com](mailto:swetha151105@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/swetha-baskar-5599963a8/](https://www.linkedin.com/in/swetha-baskar-5599963a8/)
- **GitHub**: [https://github.com/Swetha1526](https://github.com/Swetha1526)
- **Location**: Chengalpattu, Tamil Nadu, India
