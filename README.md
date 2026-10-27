# Swetha B — Developer Portfolio

Production-ready, premium personal portfolio website for **Swetha B**, a final-year B.E. Computer Science and Engineering student graduating in 2027 from Asan Memorial College of Engineering and Technology (Chengalpattu, Tamil Nadu).

Targeted for **MERN Stack Developer** and **Full Stack Developer** internships and entry-level engineering roles.

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
  - **Comprehensive ATS-Friendly Resume PDF**: Directly accessible and downloadable via navigation bar, hero actions, about section, contact grid, and footer.
  - **Verified Major Projects & Source Repositories**:
    - [ApexMart](https://github.com/Swetha1526/ApexMarT) — Major Project 1: Production full-stack e-commerce with Django REST Framework, MySQL, and React/Redux.
    - [ConnectX](https://github.com/Swetha1526/ConnectX) — Major Project 2: Real-time MERN social media & WebSocket direct chat platform.
    - [Workmate](https://workmate-brown.vercel.app/) ([GitHub Repo](https://github.com/Swetha1526/workmate)) — Major Project 3: Regional hourly worker hiring platform with React, Vite, Node.js, and MongoDB.
  - **Quantified Internship Impact**: Verified Python Full Stack internship at **Inetz Technologies** delivering the AI Resume Analyzer with measured outcomes (65% evaluation time saved, 40% ATS match boost, <500ms API response latency).
  - **Comprehensive Skills & Competencies**: Explicit categorization of Programming, Frontend, Backend, Databases, Developer Tools (Git, GitHub, Postman), and Soft Skills (Agile, Problem Solving, Communication).
  - **Interactive Developer Showcase**: Real-time syntax-highlighted MERN profile terminal card and architectural breakdown accordions for recruiters.

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
│   ├── B_Swetha_resume.pdf   # Prepared professional resume PDF
│   └── projects/             # High-resolution project showcase mockups
│       ├── apexmart.jpg      # GUVI Major Project 1 mockup
│       ├── connectx.jpg      # GUVI Major Project 2 mockup
│       ├── workmate.jpg      # Major Project 3 mockup
│       └── resume_analyzer.jpg
├── src/
│   ├── assets/               # Brand assets
│   ├── components/
│   │   ├── icons/            # SVG icons (GitHub, LinkedIn)
│   │   ├── About.jsx         # Academic background, MERN focus & resume link
│   │   ├── About.css
│   │   ├── Contact.jsx       # Email copy, profile links & resume card
│   │   ├── Contact.css
│   │   ├── Education.jsx     # B.E. CSE degree, CGPA, & coursework
│   │   ├── Education.css
│   │   ├── ExperienceTimeline.jsx # Quantified internship impact & training
│   │   ├── ExperienceTimeline.css
│   │   ├── Footer.jsx        # Dynamic year, back-to-top & resume link
│   │   ├── Footer.css
│   │   ├── Hero.jsx          # Live availability beacon, MERN headline & terminal card
│   │   ├── Hero.css
│   │   ├── Navbar.jsx        # Desktop nav, mobile drawer & resume action
│   │   ├── Navbar.css
│   │   ├── ProjectCard.jsx   # Project showcase & architecture expander
│   │   ├── ProjectCard.css
│   │   ├── Projects.jsx      # Major Projects: ApexMart, ConnectX & Workmate
│   │   ├── Projects.css
│   │   ├── Skills.jsx        # Categorized tech inventory with filters & soft skills
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
