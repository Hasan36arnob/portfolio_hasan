import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';
import { cv_data, site_title } from '$lib/cv_data';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('page', 'home');

	return {
		page,
		title: site_title,
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title || site_title,
		meta_image: page.data.meta_image.url
	};
}

export function entries() {
	return [{}];
}
