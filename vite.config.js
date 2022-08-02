import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$utils: path.resolve('./src/utils'),
			$components: path.resolve('./src/components')
		}
	},
	optimizeDeps: {
		include: ['fuzzy', 'lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	}
};

export default config;
