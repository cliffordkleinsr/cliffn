<script lang="ts">
	import Moon from 'lucide-svelte/icons/moon';

	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Sun } from '$lib/icons';
	import { setMode } from 'mode-watcher';

	setMode('dark');
</script>

<Button onclick={toggleMode} variant="outline" size="icon">
	<Sun classes="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
