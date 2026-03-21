<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';
	import { cv_data } from '$lib/cv_data';

	export let slice: Content.ExperienceSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Heading tag="h2" size="lg">
		{cv_data.experience.length > 0 ? 'Experience' : slice.primary.heading}
	</Heading>
	{#each cv_data.experience as item}
		<div class="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
			<Heading tag="h3" size="sm">
				{item.role}
			</Heading>

			<p
				class="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-light text-slate-400"
			>
				<span>{item.duration}</span>
				{' '}
				<span class="text-3xl font-extralight">/</span>{' '}
				<span>{item.company}</span>
			</p>
			<div class="prose prose-lg prose-invert mt-4">
				<ul>
					{#each item.description as bullet}
						<li>{bullet}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</Bounded>
