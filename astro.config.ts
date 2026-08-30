import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  // used to generate images
  site: 'https://tima-loenko.github.io',
  base: '/ddr-rocks-website', // change to custom https://docs.astro.build/en/guides/deploy/github/#change-your-github-url-to-a-custom-domain
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
