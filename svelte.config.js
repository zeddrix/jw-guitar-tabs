import preprocess from 'svelte-preprocess';
import adapter_static from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter_static(),
		appDir: 'internal',
		paths: {
			base: '/jw-guitar-tabs'
		},
		prerender: {
			default: true
		},
		trailingSlash: 'always',
		vite: {
			resolve: {
				alias: {
					$utils: path.resolve('./src/utils'),
					$components: path.resolve('./src/components')
				}
			},
			optimizeDeps: {
				include: ['fuzzy', 'lodash.get', 'lodash.isequal', 'lodash.clonedeep']
			}
		}
	}
};

export default config;
