<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import Avatar from './Avatar.svelte';
	import { cv_data } from '$lib/cv_data';
	import avatarSrc from '../../../assets/hassan.jpeg';

	export let slice: Content.BiographySlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
		<Heading size="xl" class="col-start-1">
			About Me
		</Heading>

		<div class="col-start-1 prose prose-invert prose-slate prose-xl">
			<p>
				{cv_data.tag_line} based in {cv_data.contact.location}.
				I specialize in developing modern, responsive web applications and performing complex data analysis.
			</p>

			<Heading size="sm" tag="h3" class="mt-8 text-slate-200">Education</Heading>
			<ul class="not-prose mt-4 space-y-6">
				{#each cv_data.education as edu}
					<li class="border-l-2 border-slate-700 pl-4">
						<h4 class="text-xl font-bold text-slate-100">{edu.degree}</h4>
						<p class="text-slate-400 font-medium">{edu.institution}</p>
						<div class="flex justify-between text-sm text-slate-500 mt-1">
							<span>{edu.duration}</span>
							<span>CGPA: {edu.cgpa}</span>
						</div>
					</li>
				{/each}
			</ul>

			<Heading size="sm" tag="h3" class="mt-12 text-slate-200">Research Work</Heading>
			<div class="mt-4 border-l-2 border-yellow-500/50 pl-4">
				<h4 class="text-xl font-bold text-slate-100">{cv_data.research.title}</h4>
				<ul class="mt-2 space-y-2 list-disc list-inside text-lg text-slate-300">
					{#each cv_data.research.details as detail}
						<li>{detail}</li>
					{/each}
				</ul>
			</div>

			<Heading size="sm" tag="h3" class="mt-12 text-slate-200">Achievements</Heading>
			<ul class="mt-4 space-y-2 list-disc list-inside text-lg text-slate-300">
				{#each cv_data.achievements as achievement}
					<li>{achievement}</li>
				{/each}
			</ul>
		</div>
		<div class="col-start-1 mt-8">
			<Button linkField={{ url: `mailto:${cv_data.contact.email}`, link_type: 'Web' }} label="Contact Me" />
		</div>

		<Avatar src={avatarSrc} class="row-start-1 max-w-sm md:col-start-2 md:row-end-3" />
	</div>
</Bounded>
