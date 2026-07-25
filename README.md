# Thought Pilot — Frontend

Marketing site for **Thought Pilot**, an AI-native content studio that ships
end-to-end content execution for B2B, SaaS, and AI founders on X and LinkedIn.

Built as a production **React + TypeScript + Vite** single-page app with a bold
editorial agency layout and signature scroll/load motion.

## Tech stack

- **React 18** + **TypeScript** (strict)
- **Vite 5** for dev server and build
- Plain CSS design system (`src/styles/globals.css`) with design tokens — no UI framework
- Fonts (Bricolage Grotesque, Inter, JetBrains Mono) via Google Fonts `<link>`

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check (tsc -b) + production build to dist/
npm run preview    # preview the production build
npm run typecheck  # type-check only
```

## Project structure

```
src/
  main.tsx                 # entry — mounts <App/>, imports globals.css
  App.tsx                  # section composition
  styles/globals.css       # design tokens + component styles + motion + responsive
  data/
    site.ts                # links, brand constants, nav
    content.ts             # typed page content (stats, panels, loop, edges, faqs, …)
  hooks/
    useReveal.ts           # scroll-reveal (IntersectionObserver)
    useMagnetic.ts         # cursor-following buttons
    useParallax.ts         # shared rAF parallax manager for media blocks
    useCountUp.ts          # eased number count-up on view
    useScrolled.ts         # sticky-header scroll state
    prefersReducedMotion.ts
  components/
    icons/                 # logo + SVG icon components
    Reveal, MagneticLink, HeroHeadline, SpacedLabel, Viz, Lines   # primitives
    TopBar, Header, Hero, Ticker, Approach, Stack, Loop,
    Results, Edge, Deliverables, WhoItsFor, Faq, Cta, Footer      # sections
```

## Sections

Announcement bar → sticky header → hero (masked wipe-in headline + animated
stats) → ticker → 01 Approach → Our · Stack (service panels) → 03 The loop
(framework carousel) → Our · Results (dark) → 05 The edge → 06 Deliverables
(X / LinkedIn) → 07 Who it's for (dark) → 08 FAQs → marquee CTA → footer.

## Motion

Masked word/character wipe-ins (hero headline, spaced-caps section labels),
magnetic buttons, scroll parallax on the gradient media blocks, stat count-ups,
an auto-advancing framework carousel, an infinite ticker, and a stroked-text CTA
marquee. Everything is gated behind `prefers-reduced-motion`.

## Brand

Warm paper `#f4f2ec` / near-black ink with a periwinkle purple accent `#8e7cd8`
drawn from the TP logo (recreated as an inline SVG component). Light editorial
sections alternate with dark Results / Who-it's-for / CTA sections.
