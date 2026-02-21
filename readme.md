# Portfolio 2026

A premium personal portfolio that blends Apple-level minimalism with refined futurism. Positions you as a **Product & Engineering Bridge** — connecting business decisions with technical execution in early-stage SaaS platforms.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle animations)
- **Three.js** (Hero section only, via @react-three/fiber)
- **Geist** font

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── work/[slug]/
│       ├── page.tsx
│       └── CaseStudyContent.tsx
├── components/
│   ├── BackLink.tsx
│   ├── Background.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── GlassCard.tsx        # Reusable glassmorphism card
│   ├── GlassNav.tsx        # Floating glass navigation bar
│   ├── Hero.tsx
│   ├── Hero3D.tsx          # Three.js animated surface (Hero only)
│   ├── LanguageToggle.tsx
│   ├── Section.tsx
│   ├── SelectedWork.tsx
│   ├── StrategyStatement.tsx
│   └── WhatIDo.tsx
├── context/
│   └── LanguageContext.tsx
└── lib/
    ├── content.ts
    └── case-studies.ts
```

## Design System

- **Style**: Apple × Futurism
- **Colors**: White (#ffffff), Soft black (#111111), Light blue frost (#eaf6ff), Subtle glow rgba(180,220,255,0.2)
- **Effects**: Glassmorphism (backdrop-blur), ultra-subtle radial gradients, soft atmospheric glow
- **Typography**: Geist, large hierarchy, extreme whitespace

## Customization

### Content
- **`src/lib/content.ts`** — All homepage copy (EN/ES) including Strategy Statement
- **`src/lib/case-studies.ts`** — Case study content

### Contact
Update in `src/components/Contact.tsx`:
```tsx
href="mailto:your@email.com"
href="https://linkedin.com/in/yourprofile"
```

### Hero 3D
The animated surface in `src/components/Hero3D.tsx` uses a custom shader for organic deformation. Adjust `uTime` multiplier (0.15) for animation speed, or `uOpacity` for visibility.
