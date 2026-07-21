# BKforNation — Next.js 15

Standalone Next.js 15 App Router project. No Lovable/TanStack.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all 20 routes prerender as static)
npm start
```

Requirements: Node 18.18+ (Node 20+ recommended).

## Structure

- `app/` — App Router pages (16 content pages + home + sitemap)
- `components/site/` — Header, Footer, Reveal, Counter, PageHero, FloatingLeaves
- `data/site.ts` — All copy, campaigns, testimonials, FAQs, donation tiers
- `public/images/` — All photos & logo marks (self-contained)
- `app/globals.css` — Tailwind v4 theme (forest / emerald / leaf / gold palette)

## Notes

- Zero external CMS or backend — pure static site.
- Donate / Contact / Volunteer use client-side interactivity.
- Fonts: Google Fonts (Poppins + Inter) loaded via `next/font`.
# BkForNation
