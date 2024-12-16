<script>
	import { Button } from '$lib/components/ui/button';
	import Search from '$lib/icons/search.svelte';
</script>

<div class="flex">
	<div
		class="m-2 mx-auto flex rounded-lg bg-gray-100 p-1 transition hover:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600"
	>
		<nav class="flex gap-x-2">
			<a
				class="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm focus:outline-none dark:bg-neutral-800 dark:text-neutral-400"
				href="/"
				aria-current="page"
			>
				Active
			</a>
			<a
				class="inline-flex items-center gap-2 rounded-lg bg-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:hover:text-blue-600 hover:text-gray-700 focus:outline-none focus:hover:text-blue-600 dark:text-neutral-400 dark:focus:text-white"
				href="#"
			>
				Link
			</a>
			<a
				class="inline-flex items-center gap-2 rounded-lg bg-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:hover:text-blue-600 hover:text-gray-700 focus:outline-none focus:hover:text-blue-600 dark:text-neutral-400 dark:focus:text-white"
				href="#"
			>
				Link
			</a>
			<div class="inline-flex items-center gap-2">
				<!-- <Modetoggle /> -->
				<Button variant="secondary">
					<Search />
				</Button>
			</div>
		</nav>
	</div>
</div>
