import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const site = process.env.PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL : 'https://example.com');
export default defineConfig({ site, trailingSlash: 'always', integrations: [sitemap()] });

