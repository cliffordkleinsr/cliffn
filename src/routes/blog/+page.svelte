<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';

	let { data }: { data: PageData } = $props();
	const { posts } = data;
</script>

<div class="grid place-content-center gap-2 py-16">
	<h1
		class="max-w-xl pb-10 text-center text-3xl font-thin underline decoration-1 underline-offset-8"
	>
		Latest Blog Posts
	</h1>
	<div class="grid max-w-xl gap-2 lg:grid-cols-2">
		{#each posts as post}
			<Card.Root>
				<Card.Header>
					<Card.Title>Card Title</Card.Title>
					<Card.Description>Card Description</Card.Description>
				</Card.Header>
				<Card.Content>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore laborum officia minima
						eveniet non ex illum, ab repellat expedita eaque a quasi beatae ducimus eligendi natus
						inventore rem? Praesentium, culpa?
					</p>
				</Card.Content>
				<Card.Footer>
					<p>Card Footer</p>
				</Card.Footer>
			</Card.Root>
		{/each}
		<Card.Root>
			<Card.Header>
				<Card.Title>Card Title</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
