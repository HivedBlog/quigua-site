import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    server: {
      proxy: {
        '/api/': {
          target: 'http://localhost:9999/.netlify/functions/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\//, ''),
        },
      },
    },
  },
});