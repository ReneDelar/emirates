// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update `site` once the production domain/host is chosen (used for sitemap + canonical URLs).
  // For GitHub Pages, also add `base: '/emirates'` here and rebuild.
  site: 'https://emiratesfishingtour.com',
  integrations: [sitemap()],
  image: {
    // Local image optimization via sharp (astro:assets).
    responsiveStyles: true,
  },
});
