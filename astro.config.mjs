import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  vite: {
    resolve: {
      alias: {
        'hiveblogkit': '/src/lib/hiveblogkit/index.js',
      },
    },
    ssr: {
      noExternal: ['hiveblogkit'],
    },
  },
});