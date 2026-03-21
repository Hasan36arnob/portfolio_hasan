<script lang="ts">
	import { type Content, isFilled } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import IconGithub from '~icons/fa-brands/github';
	import IconLinkedin from '~icons/fa-brands/linkedin';
	import IconTwitter from '~icons/simple-icons/x';
	import Bounded from './Bounded.svelte';
	import { cv_data } from '$lib/cv_data';

	export let settings: Content.SettingsDocument;
</script>

<Bounded as="footer" class="text-slate-600">
	<div
		class="container mx-auto flex mt-20 flex-col items-center justify-between gap-6 py-8 sm:flex-row"
	>
		<div
			class="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start"
		>
			<a
				href="/"
				class="text-xl font-extrabold tracking-normal text-slate-100 transition-color duration-150 hover:text-yellow-400"
			>
				{cv_data.name.first} {cv_data.name.last}
			</a>
			<span
				class="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
				aria-hidden="true">/</span
			>
			<p class="text-sm text-slate-300">
				© {new Date().getFullYear()}
				{cv_data.name.first} {cv_data.name.last}
			</p>
		</div>
		<nav class="navigation" aria-label="Footer Navigation">
			<ul class="flex items-center gap-1">
				{#each settings.data.nav_item as { link, label }, index}
					<li>
						<PrismicLink
							field={link}
							class="block px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-yellow-400"
							>{label}</PrismicLink
						>
					</li>
					{#if index < settings.data.nav_item.length - 1}
						<span class="text-4xl font-thin leading-[0] text-slate-400" aria-hidden="true">
							/
						</span>
					{/if}
				{/each}
			</ul>
		</nav>
		<div class="socials inline-flex justify-center sm:justify-end">
			<a
				href={`https://github.com/${cv_data.contact.github}`}
				target="_blank"
				rel="noreferrer"
				class="p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-125 hover:text-yellow-400"
				aria-label={cv_data.name.first + ' ' + cv_data.name.last + ' on Github'}
			>
				<IconGithub />
			</a>
			{#if cv_data.contact.linkedin}
				<a
					href={cv_data.contact.linkedin}
					target="_blank"
					rel="noreferrer"
					class="p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-125 hover:text-yellow-400"
					aria-label={cv_data.name.first + ' ' + cv_data.name.last + ' on Linkedin'}
				>
					<IconLinkedin />
				</a>
			{/if}
			{#if cv_data.contact.twitter}
				<a
					href={cv_data.contact.twitter}
					target="_blank"
					rel="noreferrer"
					class="p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-125 hover:text-yellow-400"
					aria-label={cv_data.name.first + ' ' + cv_data.name.last + ' on Twitter'}
				>
					<IconTwitter />
				</a>
			{/if}
		</div>
	</div>
</Bounded>
