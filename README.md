# Emirates Fishing Tour

Marketing website for **Emirates Fishing Tour** — luxury yacht rental, fishing trips and cruises in Dubai.
Built with [Astro](https://astro.build): component-based source, static HTML output (fast, SEO-friendly).

## Tech stack

- **Astro 5** — static site generator. Zero client-side framework; ships plain HTML/CSS.
- **astro:assets** — images are imported and auto-optimized to responsive WebP at build time.
- **@astrojs/sitemap** — `sitemap-index.xml` generated on build.
- Plain CSS with design tokens (CSS custom properties) in `src/styles/global.css` + scoped component styles. No CSS framework.

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server → http://localhost:4321
npm run build      # production build → ./dist
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  pages/         # one file per route: / , /about , /yacht-rental ,
                 #   /fishing-regions , /excursions , /contacts
  layouts/       # BaseLayout.astro — <head>/SEO, Header, Footer, reveal script
  components/    # Header, Footer, Hero, YachtCard, ServiceTile, ServiceRow,
                 #   RegionCard, Checklist, Benefits, Stats, Pills, CtaBand,
                 #   FeatureSplit, ContactForm, Section, SectionHeading
  data/          # content as typed data — edit these to change copy/pricing:
                 #   fleet.ts (yachts), services.ts (excursions),
                 #   regions.ts (fishing regions), content.ts (lists, landmarks)
  assets/img/    # source images (optimized at build)
  assets/images.ts  # image registry
  styles/global.css # design tokens, utilities, responsive rules, fonts
public/
  fonts/         # Open Sans woff2 subsets (self-hosted, no external request)
  favicon.svg
reference/
  original-yacht-rental-dubai.html  # the original single-file design (kept as reference)
```

## Editing content

Most copy lives in `src/data/*.ts`, so changes don't require touching markup:

- **Yachts / prices** → `src/data/fleet.ts`
- **Excursions** (titles + descriptions) → `src/data/services.ts`
- **Fishing regions** → `src/data/regions.ts`
- **"What's included", advantages, fishing gear, landmarks** → `src/data/content.ts`
- **Header navigation / footer links** → `src/components/Header.astro`, `src/components/Footer.astro`
- **Colors / typography** → the `:root` tokens in `src/styles/global.css`

## Deployment

The build is fully static (`./dist`) and works on any static host.

- **Vercel / Netlify** — connect the GitHub repo; framework is auto-detected (build `npm run build`, output `dist`). No config needed.
- **GitHub Pages** — set `site` and add `base: '/emirates'` in `astro.config.mjs`, then deploy `dist` via a GitHub Actions workflow (`withastro/action`).

Before going live, set the real `site` URL in `astro.config.mjs` (used for canonical URLs + sitemap).

## Known TODOs

- **Contacts form is presentational** (`action="#"`). To make it send, point it at a form backend (Netlify Forms, Formspree, or an email/Telegram webhook) — see `src/components/ContactForm.astro`.
- Phone, WhatsApp and email are placeholders (`+971 00 000 0000`, `info@emiratesfishingtour.com`) — update in `Header.astro`, `Footer.astro` and `src/pages/contacts.astro`.
- The `EN ▾` language switcher is visual only; wire up Astro i18n if multi-language is needed.
