<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/frontend/Navbar.svelte';
	import { setMode, ModeWatcher } from 'mode-watcher';
	import Particles from '$lib/frontend/Motion/Particles/Particles.svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';

	setMode('dark');

	$effect(() => {
		// Initialize Lenis
		const lenis = new Lenis({
			autoRaf: true
		});
	});

	let { children } = $props();
</script>

<ModeWatcher />
<Navbar />
<Particles className="absolute inset-0 -z-10" />
{@render children()}
