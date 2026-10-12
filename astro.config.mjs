// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update `site` once the production domain/host is chosen (used for sitemap + canonical URLs).
  // For GitHub Pages, also add `base: '/emirates'` here and rebuild.
  site: 'https://emiratesfishingtour.com',
  // The fishing section was removed — send old links to yacht rental instead.
  redirects: {
    '/fishing-regions': '/yacht-rental',
    '/ru/fishing-regions': '/ru/yacht-rental',
    '/uz/fishing-regions': '/uz/yacht-rental',
  },
  integrations: [
    sitemap({
      // Emits hreflang alternates for /, /ru/ and /uz/ versions of every page.
      i18n: { defaultLocale: 'en', locales: { en: 'en', ru: 'ru', uz: 'uz' } },
    }),
  ],
  image: {
    // Local image optimization via sharp (astro:assets).
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
