import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: static_adapter(),
		appDir: 'internal',
		paths: {
			base: '/jw-guitar-tabs'
		},
		vite: {
			resolve: {
				alias: {
					$utils: path.resolve('./src/utils'),
					$components: path.resolve('./src/components')
				}
			},
			optimizeDeps: {
				include: ['fuzzy']
			}
		}
	}
};

export default config;
