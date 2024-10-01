import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/portfolio/',
  integrations: [tailwind()],
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      es: 'en',
    },
  },
});
