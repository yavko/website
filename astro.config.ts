import svelte from "@astrojs/svelte";
import type { AstroUserConfig } from "astro";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import compress from "astro-compress";
import webmanifest from "astro-webmanifest";

const config: AstroUserConfig = {
	// Enable the Svelte renderer to support Svelte components.
	experimental: {
		integrations: true,
	},
	integrations: [
		svelte(),
		sitemap(),
		critters(),
		webmanifest({
			icon: "src/icons/yavko.svg",
			name: "Yavko's Website",
			short_name: "yavko",
			description: "Yavko's personal website and blog.",
			start_url: "/",
			theme_color: "#fff",
			background_color: "#000",
			display: "browser",
			lang: "en-US",
		}),
		compress()
	],
	site: "https://yavko.com",
	markdown: {
		shikiConfig: {
			theme: "dracula",
		},
		remarkPlugins: [
			"remark-smartypants",
			[
				"remark-autolink-headings",
				{
					behavior: "wrap",
				},
			],
		],
		rehypePlugins: [
			"rehype-slug",
			[
				"rehype-autolink-headings",
				{
					behavior: "wrap",
				},
			],
		],
	},
	vite: {
		ssr: {
			noExternal: ["smartypants"],
			external: ["svgo"],
		},
	},
};

// https://astro.build/config
export default defineConfig(config);
