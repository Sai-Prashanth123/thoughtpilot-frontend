# Thought Pilot — Landing Page

A premium, single-file landing page for **Thought Pilot**, an AI-native content studio that ships end-to-end content execution for B2B, SaaS, and AI founders on X and LinkedIn.

## Overview

`index.html` is fully self-contained — all styles and scripts are inline, with the only external dependency being Google Fonts. It requires no build step; open it in a browser or serve it statically.

## Design

The layout combines the strongest patterns from three agency inspirations into one cohesive, dark editorial system:

- **Bold editorial hero** with a compounding gradient headline and animated result stats (200M+ impressions, 100+ 1M-view posts, daily output).
- **Infinite marquee** ticker of the studio's positioning.
- **Numbered sections** (`01 · The pitch` → `05 · Who it's for`) mirroring the source narrative.
- **The loop pipeline** — Ingestion → Research → Writing → Scoring → Distribution.
- **Why-it-works cards** with ghosted index numerals.
- **The edge** 2×2 grid — Signal, Scoring, Voice, Loop.
- **Deliverables** split by channel (X / LinkedIn) with branded badges.
- **Who it's for** cards — B2B, SaaS, AI founders.
- **Full-bleed CTA** with a purple glow, plus a layered footer.

### Brand

- **Colors:** near-black `#0b0b0d` ground, warm off-white ink `#f2f0ea`, periwinkle purple accent `#8e7cd8` drawn from the TP logo (recreated inline as SVG).
- **Type:** Bricolage Grotesque (display), Inter (body), JetBrains Mono (labels).

### Interaction

Sticky blur nav with active-section highlighting, scroll-reveal animations, stat count-ups, a responsive mobile menu, and `prefers-reduced-motion` support.

## Usage

```bash
# Open directly
open index.html

# Or serve locally
python3 -m http.server 8000   # then visit http://localhost:8000
```
