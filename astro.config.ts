import svelte from '@astrojs/svelte';
import type { AstroUserConfig } from "astro";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
const config: AstroUserConfig = {
  // Enable the Svelte renderer to support Svelte components.
  integrations: [svelte(), sitemap(), critters()],
  site: "https://yavko.com",
  markdown: {
    shikiConfig: {
      theme: "dracula"
    },
    remarkPlugins: ["remark-smartypants", ["remark-autolink-headings", {
      behavior: "wrap"
    }]],
    rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', {
      behavior: 'wrap'
    }]]
  },
  vite: {
    ssr: {
      noExternal: ["smartypants"],
      external: ["svgo"]
    }
  }
};


// https://astro.build/config
export default defineConfig(config);
