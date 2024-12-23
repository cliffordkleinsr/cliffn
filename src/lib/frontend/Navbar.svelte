<script lang="ts">
	import Modetoggle from '$lib/components/Modetoggle.svelte';
	import { Button } from '$lib/components/ui/button';
	import Search from '$lib/icons/search.svelte';
	import { page } from '$app/state';

	const allTabs = [
		{ id: 'about', name: 'About', href: '/' },
		{ id: 'blog', name: 'Blog', href: '/blog' },
		{ id: 'projects', name: 'Projects', href: '/#projects' },
		{ id: 'Lab', name: 'lab', href: '/lab' }
	];

	let activeTabIndex = $state(0) as number;
	let tabsRef = $state<(HTMLElement | null)[]>([]);

	let currentTab = $derived(tabsRef[activeTabIndex]) as HTMLElement;
	let tabUnderlineWidth = $derived(currentTab?.clientWidth ?? 0);
	let tabUnderlineLeft = $derived(currentTab?.offsetLeft ?? 0);
</script>

<div class="flex">
	<div
		class="flew-row relative m-2 mx-auto flex h-14 rounded-lg border border-black/40 bg-neutral-500 px-2 backdrop-blur-sm dark:bg-neutral-800"
	>
		<span
			class="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
			style="left: {tabUnderlineLeft}px; width: {tabUnderlineWidth}px"
		>
			<span class="h-full w-full rounded-3xl bg-gray-200/30"></span>
		</span>
		{#each allTabs as tab, index}
			<a
				bind:this={tabsRef[index]}
				class="
						{activeTabIndex === index ? '' : 'hover:text-neutral-300'}
						my-auto cursor-pointer select-none rounded-full
						px-4 text-center font-light text-white
					"
				href={tab.href}
				aria-current="page"
				onclick={() => (activeTabIndex = index)}
			>
				{tab.name}
			</a>
		{/each}
		<div class="ml-1 inline-flex items-center gap-2">
			<Modetoggle />
			<Button variant="secondary">
				<Search />
			</Button>
		</div>
	</div>
</div>
