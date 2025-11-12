# FullstackSchool

A modern, interactive learning platform that visualizes technology stacks and learning paths. Explore frontend, backend, databases, and infrastructure with visual tech trees, interactive cards, and curated roadmaps.

<p align="center">
  <img alt="FullstackSchool" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-Animation-0055FF?logo=framermotion&logoColor=white" />
  <img alt="React Flow" src="https://img.shields.io/badge/React%20Flow-Graphs-000000?logo=react&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green" />
</p>

---



---

## Features
- Interactive tech tree visualization using React Flow
- Category-based exploration: Frontend, Backend, Database, Infrastructure
- Modern landing page with animated hero, previews, and social proof
- Flip-card style technology details with resources and descriptions
- Smooth page transitions and animations via Framer Motion
- Responsive, mobile-first UI

## Tech Stack
- Frontend: React 18, Framer Motion, React Flow, AOS (Animate on Scroll)
- Styling: CSS modules per component, responsive design
- Routing: react-router-dom (in codebase; navigation is state-driven inside App)
- Backend: Express (static file server for production build)
- Build Tooling: Create React App (react-scripts)

## Project Structure
```
.
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.jsx
│   ├── index.js
│   ├── styles/
│   │   └── globals.css
│   ├── data/
│   │   ├── techlist.json
│   │   └── techtree.json
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── HeroSection.jsx / HeroSection.css
│   │   ├── LandingPage.jsx / LandingPage.css
│   │   ├── AboutSection, HowItWorks, PreviewSection
│   │   ├── TechTree.jsx / TechTree.css (visual graph)
│   │   ├── TechGrid.jsx / TechCard.jsx and styles
│   │   └── SearchBar, CategorySelector, Footer
│   └── pages/
│       ├── Frontend.jsx
│       ├── Backend.jsx
│       ├── Database.jsx
│       └── Infrastructure.jsx
├── server.js              # Express server for production
├── package.json
└── README.md
```

## Getting Started
Prerequisites:
- Node.js 18+
- npm 8+

Install dependencies:
```
npm install
```

Run in development (CRA dev server):
```
npm run dev
```
This runs the app in development mode on http://localhost:3000 with hot reload.

Build for production:
```
npm run build
```
This creates an optimized production build in the build/ folder.

Serve production build with Express:
```
npm start
```
This runs `node server.js` which serves the build/ directory at http://localhost:3000.

## Available Scripts
- dev: Start CRA dev server
- build: Build the app for production
- start: Serve the production build via Express
- test: Run CRA test runner
- eject: Eject CRA configuration

.json: Flat list of technologies with metadata used by TechGrid/TechCard

## Key Components
- Navbar: Top navigation with category entries and mobile menu
- LandingPage: Hero, About, How It Works, Preview, Features, Social proof, Final CTA
- TechTree: Visual dependency map (React Flow)
- TechGrid + TechCard: Interactive cards with flip animations/resources
- SearchBar + CategorySelector: Quick filtering and category selection





---

<p align="center">
  <img alt="CI" src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
  <img alt="Contributions" src="https://img.shields.io/badge/Contributions-Welcome-blueviolet?style=for-the-badge" />
  <img alt="Made with Love" src="https://img.shields.io/badge/Made%20with-%E2%9D%A4-red?style=for-the-badge" />
</p>
