import {defineConfig} from "vite";
import dts from "vite-plugin-dts"
import {resolve} from "node:path"

export default defineConfig({
	plugins: [
		dts({
			rollupTypes: true
		})
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: 'bx24-nuxt',
			fileName: 'index',
		},
	}
})