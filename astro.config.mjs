import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import path from 'path';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  vite: {
    resolve: {
      alias: {
        'hiveblogkit': path.resolve('./lib/hiveblogkit/index.js'),
      },
    },
    ssr: {
      noExternal: ['hiveblogkit'],
    },
  },
});