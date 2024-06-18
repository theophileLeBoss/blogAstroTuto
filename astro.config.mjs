import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://preeminent-taiyaki-f24c9e.netlify.app/about/",
  integrations: [preact()]
});