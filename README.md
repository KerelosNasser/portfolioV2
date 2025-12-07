# Portfolio V2 - Custom Design

## 📋 Project Overview

**Status:** 🚧 Work in Progress - Custom Portfolio Development

This project started as a YouTube tutorial portfolio but has been **pivoted to a custom design** based on personal ideas and vision. The initial structure and some technical setup from the tutorial are being retained, but the actual design, layout, and implementation are being built from scratch.

## 🎯 Project Vision

This portfolio showcases:
- **Custom interactive animations** - Using Three.js and Framer Motion for engaging visual effects
- **Modern tech stack** - React 19, Vite (Rolldown), Tailwind CSS v4
- **3D elements** - React Three Fiber with custom 3D models (Astronaut component)
- **Responsive design** - Mobile-first approach with dynamic layouts
- **Performance-optimized** - Fast loading with modern bundling

## 📁 Project Structure

```
portfolioV2/
├── public/
│   └── assets/          # Static assets (logos, project images, social icons)
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Astronut.jsx           # 3D astronaut model (Three.js)
│   │   ├── FlipWord.jsx           # Text animation component
│   │   ├── HeroText.jsx           # Hero section text
│   │   ├── Loader.jsx             # Loading state component
│   │   └── ParallelBackground.jsx # Parallax background effect
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx               # Hero section with 3D canvas
│   │   ├── About.jsx              # About section (placeholder)
│   │   └── navbar.jsx             # Navigation bar
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🔨 Tech Stack

### Core Dependencies
- **React 19** - UI framework
- **Vite (Rolldown)** - Ultra-fast build tool
- **Tailwind CSS v4** - Utility-first CSS with Vite plugin
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Framer Motion** - Advanced animations
- **react-responsive** - Responsive design utilities
- **clsx + tailwind-merge** - Conditional styling utilities

## 📝 Current Implementation Status

### ✅ Completed
- Project setup with Vite + React 19
- Tailwind CSS v4 integration
- Navbar component structure
- Hero section with:
  - 3D astronaut model
  - Mouse-tracking camera animation
  - Parallax background
  - Responsive design for mobile
- Basic About section skeleton

### 🚧 In Progress / Planned
- [ ] Complete About section with content cards
- [ ] Projects showcase section
- [ ] Experience/Skills section
- [ ] Contact form section
- [ ] Footer
- [ ] Portfolio content and images
- [ ] Fine-tune animations and interactions
- [ ] Performance optimization
- [ ] SEO optimization

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Generates optimized build in `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Decisions

### Why Custom Over Tutorial?
- **Personalization** - This portfolio reflects individual style and ideas rather than following a template
- **Learning** - Building from custom specs deepens understanding of React, 3D graphics, and animations
- **Uniqueness** - Standing out to potential employers with original design
- **Flexibility** - Ability to pivot features and design without being constrained by tutorial structure

### Key Components Explained

#### Hero Section
- Uses Three.js Canvas for 3D rendering
- Implements mouse tracking for dynamic camera movement (`Rig` component)
- Contains responsive 3D astronaut model
- Fallback loader for suspense handling

#### Animations
- **Easing** - Uses `maath` library for smooth camera transitions
- **Motion** - Framer Motion for DOM animations
- **Parallax** - ParallelBackground component creates depth effect

#### Responsive Design
- Mobile detection via `react-responsive`
- Scale adjustments for 3D models on smaller screens
- Tailwind breakpoints for layout changes

## 🛠️ Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production with Rolldown |
| `npm run lint` | Run ESLint on codebase |
| `npm run preview` | Preview production build locally |

## 📦 Key Dependencies Notes

- **@tailwindcss/vite** - Modern Tailwind integration (replaces PostCSS setup)
- **maath** - Math utilities for Three.js animations
- **motion** - Animation library (paired with Framer Motion)
- **@react-three/fiber** & **@react-three/drei** - Essential for 3D rendering

## 🔄 Development Workflow

1. Start dev server: `npm run dev`
2. Edit components in `src/`
3. Hot Module Replacement (HMR) will auto-refresh
4. Build and preview before deployment

## 📚 Learning Resources Referenced
- Started with a YouTube tutorial for portfolio structure
- Building custom implementation using React, Three.js, and Tailwind CSS best practices
- Custom animations and interactions designed from scratch

## 🎯 Next Steps for Development

1. **Content** - Add portfolio projects, about information, and experience
2. **Section Completion** - Finish remaining sections (Projects, Experience, Contact, Footer)
3. **Fine-tuning** - Refine animations and interactions for smooth UX
4. **Optimization** - Lazy load 3D models, optimize bundle size
5. **Testing** - Test across browsers and devices
6. **Deployment** - Deploy to hosting platform (Vercel, Netlify, etc.)

## 📞 Notes for HR/Reviewers

This portfolio demonstrates:
- **Advanced React skills** - Component composition, hooks, suspense, and responsive design
- **3D web development** - Integration of Three.js with React for modern interactive experiences
- **Modern tooling** - Proficiency with Vite, Tailwind CSS, and latest JavaScript ecosystem
- **Design sense** - Custom, responsive UI with thoughtful animations
- **Problem-solving** - Building features from scratch rather than following templates
- **Performance awareness** - Using modern techniques for fast loading and smooth interactions

**Key Takeaway:** This is an in-progress project that showcases the ability to learn, adapt, and build custom solutions. The transition from a tutorial to a personalized portfolio reflects self-directed learning and creative thinking.
