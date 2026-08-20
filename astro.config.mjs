// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { FontaineTransform } from 'fontaine';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.grandbuffetpace.com',
  build: {
    inlineStylesheets: 'always'
  },
  integrations: [react(), sitemap()],

  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: {
          'Geist Variable': ['Arial', 'Liberation Sans', 'DejaVu Sans'],
          'Barlow Condensed': ['Arial', 'Liberation Sans', 'DejaVu Sans']
        }
      }),
      tailwindcss()
    ]
  }
});
