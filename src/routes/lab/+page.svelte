<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type { PageData } from './$types';
	import First from '$lib/frontend/Scenes/First.svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import { Studio } from '@threlte/studio';

	let { data }: { data: PageData } = $props();

	const large = new MediaQuery('min-width: 800px');
</script>

{#if large.current}
	<div class="relative size-full">
		<Canvas>
			<!-- <Studio> -->
			<First />
			<!-- </Studio> -->
		</Canvas>
	</div>
{:else}
	<div class=" mx-auto h-[93vh] py-36">
		<h1 class="max-w-sm text-center text-xl">
			This experience is best when viewed on a large screen
		</h1>
	</div>
{/if}
