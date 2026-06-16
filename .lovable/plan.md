# Alna Kurnia Sari — Quality & Productivity Consultant Portfolio

A premium, Swiss-grid single-page site with an industrial/manufacturing soul, conversion-focused structure, and a quiet personal brand layer. White canvas, black type, **Industrial Blue (#0F4C81)** as the sole accent.

## Design system

- **Tokens (src/styles.css)**: white background, near-black foreground (#0a0a0a), accent `#0F4C81`, muted hairline borders (#e5e5e5), generous spacing scale, sharp corners (radius 2–4px max).
- **Type**: Inter via Google Fonts `<link>` in `__root.tsx` — wide weight range (300/400/500/700/900), tight tracking on display sizes, generous leading on body. Mono accents (JetBrains Mono) for metric labels and section numbers (01 / 02 / 03).
- **Grid**: 12-col Swiss grid, large left-aligned headlines, numbered section markers, hairline dividers, lots of whitespace.
- **Motion**: subtle only — fade/translate-up on scroll for section reveals, hover underline on links, KPI count-up on view. No parallax, no flashy effects.

## Page structure (single route `/`)

Each section becomes its own component under `src/components/sections/`:

1. **Nav** — minimal: name-mark left, anchor links right, "Book Strategy Call" outline button.
2. **Hero** — bold display headline "Most Productivity Problems Are Actually Management System Problems." Subhead, two CTAs (primary blue + ghost). Right column: AI-generated factory floor image + overlaid KPI panel card with the 4 metrics (↓35% Defects, ↑22% Productivity, ↓18% Waste, ↑40% Visibility).
3. **Credibility strip** — full-bleed thin band: `QUALITY · PRODUCTIVITY · CONTINUOUS IMPROVEMENT · DATA ANALYTICS` with one-line statement.
4. **About** — "From Factory Floor to Strategic Improvement Partner". Two-column: portrait + story + philosophy bullets + compact timeline.
5. **Services** — three cards (QMS / CI & OpEx / Data Analytics). Each: number, title, focus list, outcomes list, hairline divider.
6. **Process** — horizontal 5-step Swiss framework (01 Assess → 05 Sustain), connector arrows on desktop, vertical stack on mobile.
7. **Before & After** — two large metric panels side-by-side; "Before" muted, "After" accented; large numeric KPIs.
8. **Dashboard showcase** — AI-generated Power BI–style dashboard screenshots in a 3-up grid (Quality, Productivity, KPI scorecard).
9. **Insights** — 4 article cards with category, title, read-time. Links are placeholder anchors.
10. **Testimonials** — Swiss grid of 4 quotes focused on outcomes; small attribution.
11. **Final CTA** — "Better Systems Create Better Results." Two buttons.
12. **Footer** — name, role, LinkedIn / Email / Contact, small print.

## Imagery (AI-generated, saved to `src/assets/`)

Generated with `imagegen` (standard quality, photographic, neutral color palette to sit beside the accent blue without competing):

- `hero-factory.jpg` — wide modern factory floor, clean production line, soft daylight, no people-faces front-and-center.
- `portrait.jpg` — editorial portrait of a professional woman in a manufacturing/office setting, neutral background, confident, not stock-y.
- `dashboard-quality.jpg`, `dashboard-productivity.jpg`, `dashboard-kpi.jpg` — realistic Power BI screen renders with charts, KPI tiles, trend lines.
- `process-inspection.jpg` (optional, for About or Process backdrop) — close-up of quality inspection / process mapping whiteboard.

All images receive descriptive alt text for SEO.

## SEO / head

- Title: "Alna Kurnia Sari — Quality & Productivity Consultant"
- Meta description under 160 chars, focused on management systems for manufacturing SMEs.
- Open Graph + Twitter card using `hero-factory.jpg` as og:image.
- Single H1 (hero), semantic section/h2 hierarchy, JSON-LD `Person` + `ProfessionalService` schema.

## Technical notes

- TanStack Start, file route `src/routes/index.tsx` only. Replace placeholder content.
- Tailwind v4 tokens in `src/styles.css` under `@theme` (no `tailwind.config.js`).
- Fonts via `<link>` in `src/routes/__root.tsx` head.
- Components composed from existing shadcn primitives (Button, Card, Separator) themed via tokens — no hardcoded colors in JSX.
- Responsive: mobile-first, grid → flex promotion at `md:`/`lg:`, `min-w-0` / `truncate` on text in flex rows.
- No backend, no Cloud — pure static marketing site. CTAs are anchor links / `mailto:` placeholders the user can wire later.

## Copy

I'll refine and lightly expand your copy — keeping voice, sharpening lengths, and adding small supporting microcopy (eyebrow labels, KPI captions, card subtitles) so each section reads tight at Swiss density.

## Out of scope (call out for later)

- Real photos of Alna and real client logos (swap when available).
- Booking integration (Calendly/Cal.com) — currently a styled button.
- Article detail pages — Insights cards link to `#` for now.
- CMS — content is static in components.