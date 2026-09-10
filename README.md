# NEXUS® Studio

Marketing site for NEXUS, a distributed technology studio. Rebuilt on **Next.js 15 (App Router)** and **TypeScript**.

## Stack

- **Next.js 15** — App Router, React Server Components by default
- **TypeScript**
- **Tailwind CSS v4**
- **next/font** — self-hosted Google fonts (DM Sans, Space Grotesk, IBM Plex Mono), no external font requests
- **next/image** — optimized team photos

Only 3 components are client-side (`"use client"`): the canvas particle hero, the hover-preview team list, and the contact form. Everything else — including all four routes — renders as a React Server Component, so almost no JavaScript ships for a first paint.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint with ESLint

## Project structure

```
app/
  layout.tsx        Root layout: fonts, header, footer, metadata
  page.tsx           Home
  about/page.tsx      About
  services/page.tsx   Services
  contact/page.tsx    Contact
  not-found.tsx        404
  error.tsx            Error boundary
  globals.css          Theme tokens + Tailwind
src/
  components/         UI components (site header/footer, hero, pricing, etc.)
  lib/utils.ts         cn() class helper
public/
  assets/              Team photos
```

## Notes on the rewrite

This project previously ran on TanStack Start + TanStack Router with ~50 npm dependencies (a full shadcn/ui set, react-query, react-hook-form, zod, recharts, embla-carousel, etc.), of which only one (`Button`) was actually used in the app. The Next.js rewrite keeps the same design and behavior but trims the dependency list to what the app actually needs (~15 packages), which shrinks install size and the client JS bundle considerably.
# Nexus-studio
