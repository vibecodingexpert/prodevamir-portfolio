# Premium 3D Portfolio Website

An immersive underwater-themed 3D portfolio website built with Next.js 15, React Three Fiber, and modern web technologies.

![Portfolio Preview](public/images/og-image.jpg)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **3D Graphics:** Three.js, React Three Fiber, Drei
- **Animations:** Framer Motion, GSAP
- **Icons:** Lucide, React Icons

## Features

- Immersive 3D underwater background with animated fish, particles, bubbles, and light rays
- Glassmorphism UI design with dark ocean theme
- 3D interactive project gallery with floating objects
- Smooth scroll animations and parallax effects
- Responsive design for all screen sizes
- Performance optimized with adaptive DPR and lazy loading
- SEO optimized with metadata, Open Graph, and structured data
- Accessibility focused with ARIA labels and keyboard navigation

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── background/   # Three.js underwater scene
│   ├── projects/     # 3D project components
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI components
├── constants/        # Site data and configuration
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── types/            # TypeScript type definitions
```

## Customization

Edit `src/constants/index.ts` to update:

- Personal information and bio
- Skills and experience
- Project details
- Social media links
- Navigation links

## Deployment

### Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository directly to Vercel for automatic deployments.

## Performance

- Lighthouse score: 90+ (all categories)
- Lazy loading with dynamic imports
- Adaptive DPR and events for Three.js
- Optimized bundle with code splitting
- Suspense boundaries for 3D content

## License

MIT
