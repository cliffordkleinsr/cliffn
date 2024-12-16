<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/frontend/Navbar.svelte';
	import { ScrollWrapper } from '@shentohendriks/svelte-smoothscroll';
	import { ModeWatcher } from 'mode-watcher';
	import Particles from '$lib/frontend/Motion/Particles/Particles.svelte';

	let { children } = $props();
</script>

<ModeWatcher />
<Navbar />
<Particles className="absolute inset-0 -z-10" />
<ScrollWrapper settings={{ smoothWheel: true }}>
	{@render children()}
</ScrollWrapper>
