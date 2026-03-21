<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import ContentList from './ContentList.svelte';
	import { cv_data } from '$lib/cv_data';

	export let slice: Content.ContentIndexSlice;

	export let items: Content.BlogpostDocument[] | Content.ProjectDocument[];

	// Use user's projects if the content type is 'Project'
	const userProjects = cv_data.projects.map((p, index) => ({
		id: `user-project-${index}`,
		tags: p.technologies.split(', '),
		data: {
			title: p.title,
			hover_image: null
		},
		url: p.live_demo,
		source_code: p.source_code
	}));

	const displayItems = slice.primary.content_type === 'Project' ? userProjects : items;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Heading size="xl" class="mb-8">
		{slice.primary.heading}
	</Heading>
	{#if isFilled.richText(slice.primary.description)}
		<div class="prose prose-xl prose-invert mb-10">
			<PrismicRichText field={slice.primary.description} />
		</div>
	{:else if slice.primary.content_type === 'Project'}
		<div class="prose prose-xl prose-invert mb-10">
			<p>
				Here are some of the projects I've worked on recently, ranging from web applications to machine learning models.
			</p>
		</div>
	{/if}

	<ContentList
		items={displayItems}
		fallbackItemImage={slice.primary.fallback_item_image}
		viewMoreText={slice.primary.view_more_text}
	/>
</Bounded>
