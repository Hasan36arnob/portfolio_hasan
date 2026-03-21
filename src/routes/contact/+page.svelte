<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import { cv_data } from '$lib/cv_data';
</script>

<Bounded>
	<div class="grid gap-12 md:grid-cols-2">
		<div class="flex flex-col gap-8">
			<Heading size="xl" tag="h1">Contact Me</Heading>
			<p class="prose prose-xl prose-invert text-slate-300">
				I'm always open to new opportunities, collaborations, or just a friendly chat. 
				Feel free to reach out to me through any of the platforms below.
			</p>

			<div class="flex flex-col gap-6 mt-4">
				<div class="flex flex-col border-l-2 border-yellow-500 pl-6 py-2">
					<span class="text-sm font-bold uppercase tracking-widest text-slate-500">Email</span>
					<a href="mailto:{cv_data.contact.email}" class="text-2xl font-bold text-slate-100 hover:text-yellow-400 transition-colors">
						{cv_data.contact.email}
					</a>
				</div>

				<div class="flex flex-col border-l-2 border-slate-700 pl-6 py-2">
					<span class="text-sm font-bold uppercase tracking-widest text-slate-500">Phone</span>
					<span class="text-2xl font-bold text-slate-100">{cv_data.contact.phone}</span>
				</div>

				<div class="flex flex-col border-l-2 border-slate-700 pl-6 py-2">
					<span class="text-sm font-bold uppercase tracking-widest text-slate-500">Location</span>
					<span class="text-2xl font-bold text-slate-100">{cv_data.contact.location}</span>
				</div>
			</div>

			<div class="mt-8">
				<Button linkField={{ url: `mailto:${cv_data.contact.email}`, link_type: 'Web' }} label="Send an Email" />
			</div>
		</div>

		<div class="flex flex-col gap-12">
			<div>
				<Heading size="md" tag="h2" class="mb-6">Connect</Heading>
				<div class="flex gap-6">
					<a href="https://github.com/{cv_data.contact.github}" target="_blank" rel="noreferrer" class="text-4xl text-slate-400 hover:text-white transition-colors">
						GitHub
					</a>
					<a href={cv_data.problem_solving.profiles.codeforces} target="_blank" rel="noreferrer" class="text-4xl text-slate-400 hover:text-white transition-colors">
						Codeforces
					</a>
					<a href={cv_data.problem_solving.profiles.codechef} target="_blank" rel="noreferrer" class="text-4xl text-slate-400 hover:text-white transition-colors">
						CodeChef
					</a>
				</div>
			</div>
		</div>
	</div>
</Bounded>
