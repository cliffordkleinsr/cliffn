<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	let { data }: { data: PageData } = $props();

	let labdata = import.meta.glob('/src/lib/frontend/Scenes/*.svelte', {
		eager: true
	});

	let slugs: any[] = [];
	for (const path in labdata) {
		const file = labdata[path];
		const slug = path.split('/').at(-1);

		slugs.push(slug);
	}
</script>

<div>
	<!---->
	<div class="flex h-[95vh] flex-col items-center justify-center">
		<div class="flex items-center justify-center rounded-full border border-zinc-600 px-2 py-[6px]">
			<div class="mr-2 h-5 w-5 rounded-full bg-zinc-900 p-[4px] text-zinc-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v3m0 12v3M5.636 5.636l2.122 2.122m8.484 8.484l2.122 2.122M3 12h3m12 0h3M5.636 18.364l2.122-2.122m8.484-8.484l2.122-2.122"
					></path></svg
				>
			</div>
			<div class="text-sm text-zinc-400">Innovate &amp; Transform</div>
		</div>
		<div class="relative mb-12 mt-5 text-center text-5xl font-medium">
			<h1 class="relative isolate z-10 pb-3 leading-[65px] text-white">Coming soon</h1>
			<div
				class="absolute bottom-12 left-1/2 z-[1] h-12 w-96 -translate-x-1/2 bg-orange-600 opacity-60 blur-[60px]"
			></div>
		</div>
	</div>
	<!---->
</div>

<!-- <div class="mx-auto grid gap-2 lg:grid-cols-2">
	{#each slugs as slug}
		<Card.Root>
			<Card.Header>
				<Card.Title>{slug.split('.')[0]}</Card.Title>
				<Card.Description></Card.Description>
			</Card.Header>
			<Card.Content></Card.Content>
			<Card.Footer>
				<Button variant="secondary"><ArrowUpRight /> View</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
</div> -->
