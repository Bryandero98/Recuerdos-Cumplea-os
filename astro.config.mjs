import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
	site: "https://www.yourwebsite.com", // TODO: reemplaza con tu URL de Netlify antes de publicar
	integrations: [
		icon(),
		sitemap({
			filter: (page) => !page.includes("/admin"),
			changefreq: "weekly",
			priority: 0.7,
		}),
	],
	image: {
		layout: "constrained",
	},
});
