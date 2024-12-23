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

<div class="mx-auto grid gap-2 lg:grid-cols-2">
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
</div>
