# Emirates Fishing Tour

Marketing website for **Emirates Fishing Tour** — luxury yacht rental and cruises in Dubai.
Built with [Astro](https://astro.build): component-based source, static HTML output (fast, SEO-friendly).

## Tech stack

- **Astro 5** — static site generator. Component-based source, ships static HTML.
- **Tailwind CSS v4** (`@tailwindcss/vite`) — utility-first styling. Design tokens live in the `@theme` block in `src/styles/global.css`; a few repeated atoms (`.btn`, `.card`, `.eyebrow`, `.section-title`, `.container`, …) are defined there with `@apply`, the rest is utilities in the markup.
- **GSAP + ScrollTrigger** — hero entrance timeline and staggered scroll-reveal animations (see `src/layouts/BaseLayout.astro`). Hooks are `data-` attributes (`data-reveal`, `data-reveal-root`, `data-grid`, `data-hero`) so motion is decoupled from styling. Honors `prefers-reduced-motion`.
- **astro:assets** — images imported and auto-optimized to responsive WebP at build time.
- **@astrojs/sitemap** — `sitemap-index.xml` generated on build, with hreflang alternates for every language.
- **i18n** — English (`/`), Russian (`/ru/`) and Uzbek, Latin script (`/uz/`). See *Languages* below.

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
  pages/[...lang]/  # one file per route, built once per language:
                 #   / , /about , /yacht-rental , /excursions ,
                 #   /contacts  (+ /ru/… and /uz/…)
  layouts/       # BaseLayout.astro — <head>/SEO, Header, Footer, reveal script
  components/    # Header, Footer, Hero, YachtCard, ServiceTile, ServiceRow,
                 #   Checklist, Benefits, Stats, Pills, CtaBand,
                 #   FeatureSplit, ContactForm, Section, SectionHeading
  i18n/          # config.ts (locales, URL helpers), index.ts (useI18n),
                 #   locales/en.ts · ru.ts · uz.ts — ALL site copy lives here
  data/          # non-text data (ids, images, prices) merged with i18n copy:
                 #   fleet.ts (yachts), services.ts (excursions)
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

All copy lives in the locale dictionaries `src/i18n/locales/{en,ru,uz}.ts`, so changes don't require touching markup. Change a text in **all three** files.

- **Page texts, navigation, footer, form, buttons** → the matching keys in `src/i18n/locales/*.ts`
- **Yachts / prices / capacity** → `src/data/fleet.ts`
- **Excursions** (titles + descriptions) → `services` in the locale files; images/order in `src/data/services.ts`
- **"What's included", advantages, landmarks** → `lists` in the locale files
- **Colors / typography** → the `@theme` tokens in `src/styles/global.css` (e.g. `--color-brand`), exposed as Tailwind utilities like `text-brand` / `bg-navy`

## Languages

| Language | URL prefix | Dictionary |
| --- | --- | --- |
| English (default) | `/` | `src/i18n/locales/en.ts` |
| Русский | `/ru/` | `src/i18n/locales/ru.ts` |
| Oʻzbekcha (Latin) | `/uz/` | `src/i18n/locales/uz.ts` |

- `en.ts` defines the shape (`Dict` type); `ru.ts` / `uz.ts` are typed as `Dict`, so a missing or extra key is a type error (`npx astro check`).
- Components get the current language from the URL: `const { lang, t, path } = useI18n(Astro.url)`. Wrap every internal link in `path('/contacts')` so it stays in the current language.
- The header switcher links to the same page in the other languages; `<html lang>`, `og:locale`, `hreflang` alternates (+ `x-default`) and the sitemap are generated per language.
- Uzbek uses the official Latin spelling with ʻ (U+02BB) in oʻ/gʻ and ʼ (U+02BC) — not a plain apostrophe.
- To add a language: add the code to `locales` in `src/i18n/config.ts`, create `src/i18n/locales/<code>.ts`, register it in `src/i18n/index.ts` and in the sitemap `i18n.locales` in `astro.config.mjs`.

The old `/fishing-regions` pages (all languages) redirect to `/yacht-rental` — see `redirects` in `astro.config.mjs`.

## Deployment

The build is fully static (`./dist`) and works on any static host.

- **Vercel / Netlify** — connect the GitHub repo; framework is auto-detected (build `npm run build`, output `dist`). No config needed.
- **GitHub Pages** — set `site` and add `base: '/emirates'` in `astro.config.mjs`, then deploy `dist` via a GitHub Actions workflow (`withastro/action`).

Before going live, set the real `site` URL in `astro.config.mjs` (used for canonical URLs + sitemap).

## Known TODOs

- **Contacts form is presentational** (`action="#"`). To make it send, point it at a form backend (Netlify Forms, Formspree, or an email/Telegram webhook) — see `src/components/ContactForm.astro`.
- Phone, WhatsApp and email are placeholders (`+971 00 000 0000`, `info@emiratesfishingtour.com`) — update in `Header.astro`, `Footer.astro` and `src/pages/contacts.astro`.
