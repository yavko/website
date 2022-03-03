import type { AstroUserConfig } from "astro";

const config: AstroUserConfig = ({
	// Enable the Svelte renderer to support Svelte components.
	renderers: ['@astrojs/renderer-svelte'],
	buildOptions: {
		site: "https://yavko.com",
		sitemap: true,
	},
	vite: {
		ssr: {
		  noExternal: ['smartypants'],
		  external: ["svgo"],
		},
	},
});

export default config;