import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://juanda15.github.io/',
  base: '/portfolio',
  integrations: [tailwind(), db()],
  output: 'server',
  vite: {
    ssr: {
      noExternal: ['astro', '@astrojs/image', '@fontsource-variable/onest'],
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
    fallback: {
      es: 'en',
    },
  },
});
