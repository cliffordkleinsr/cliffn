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
		const lenis = new Lenis();
		// Use requestAnimationFrame to continuously update the scroll
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	let { children } = $props();
</script>

<ModeWatcher />

<!-- <Particles className="absolute inset-0 -z-10" /> -->
<div class="noise">
	<Navbar />
	{@render children()}
</div>
