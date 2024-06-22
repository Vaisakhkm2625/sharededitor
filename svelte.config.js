//import adapter from '@sveltejs/adapter-auto';
//
///** @type {import('@sveltejs/kit').Config} */
//const config = {
//	kit: {
//		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
//		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
//		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
//		adapter: adapter()
//	}
//};

import adapter from '@sveltejs/adapter-vercel';

export default {
    kit: {
        adapter({
            images: {
                sizes: [640, 828, 1200, 1920, 3840],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 300,
        domains: ['example-app.vercel.app'],
    }
})
    }
};
