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
	<div>
		<!---->
		<div class="flex h-[69vh] flex-col items-center justify-center">
			<div
				class="flex items-center justify-center rounded-full border border-zinc-600 px-2 py-[6px]"
			>
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

	<!-- <div class="grid max-w-xl gap-2 lg:grid-cols-2">
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
	</div> -->
</div>
