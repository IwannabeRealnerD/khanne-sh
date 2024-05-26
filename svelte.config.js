import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: { "$/*": "src/*", "$constants": "src/constants/*" },
		paths: {
			base: process.env.NODE_ENV === "production" ? "/khanne-sh" : ""
		}
	}
};

export default config;
