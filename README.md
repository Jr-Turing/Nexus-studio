# NEXUS® Studio

Marketing site for NEXUS, a distributed technology studio. Rebuilt on **Next.js 15 (App Router)** and **TypeScript**.

## Stack

- **Next.js 15** — App Router, React Server Components by default
- **TypeScript**
- **Tailwind CSS v4**
- **next/font** — self-hosted Google fonts (DM Sans, Space Grotesk, IBM Plex Mono), no external font requests
- **next/image** — optimized team photos

## Getting started

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Scripts
- `bun run dev` — start the dev server
- `bun run build` — production build
- `bun run start` — run the production build
- `bun run lint` — lint with ESLint

## Project structure

```
.
├── app/                    Next.js App Router
│   ├── error.tsx           Client-side error boundary
│   ├── globals.css         Global styles and theme tokens
│   ├── layout.tsx          Root layout, fonts, header, and footer
│   ├── not-found.tsx       Branded 404 page
│   └── page.tsx            Homepage and section composition
├── public/
│   ├── assets/             Team photos and static media
│   └── robots.txt          Search crawler rules
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx  Shared button component
│   │   ├── about.tsx       About section
│   │   ├── builders.tsx    Team builders section
│   │   ├── contact-form.tsx Contact form
│   │   ├── contact.tsx     Contact section
│   │   ├── expertise.tsx   Expertise/services section
│   │   ├── page-shell.tsx  Shared inner-page layout
│   │   ├── particle-text.tsx Interactive hero typography
│   │   ├── pricing.tsx     Pricing section
│   │   ├── site-footer.tsx Site footer
│   │   └── site-header.tsx Site navigation
│   └── lib/
│       └── utils.ts        Shared cn() class helper
├── eslint.config.mjs       ESLint configuration
├── next.config.ts          Next.js configuration
├── package.json             Scripts and dependencies
├── postcss.config.mjs      PostCSS configuration
├── tsconfig.json            TypeScript configuration
└── README.md                Project documentation
```

# Team Nexus
