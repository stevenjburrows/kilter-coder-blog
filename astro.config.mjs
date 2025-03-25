import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://kilted-coder-blog.netlify.app/",
	base: "/",
	integrations: [sitemap()],
});
