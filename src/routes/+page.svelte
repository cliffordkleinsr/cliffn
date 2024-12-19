<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Index from '$lib/frontend/Motion/OrbitingCircles/Index.svelte';
	import Projex from '$lib/frontend/Projects/Projex.svelte';
</script>

<div class="grid max-w-full justify-center gap-2 px-2 py-14 text-muted-foreground">
	<h1 class="bg-gradient-to-b from-blue-300 to-zinc-500 bg-clip-text text-2xl text-transparent">
		About me
	</h1>
	<Avatar.Root>
		<Avatar.Image
			src="https://res.cloudinary.com/dmy8yp9el/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1728725657/kratos.webp"
			alt="kratos"
		/>
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>
	<div class="max-w-xl">
		<h1
			class="bg-gradient-to-b from-blue-300 to-zinc-500 bg-clip-text text-lg italic text-transparent"
		>
			clifford <span class="text-base text-muted-foreground">is a(n)</span>
		</h1>
		<p>Web Designer, Game Developer, Avid Machine learning enthusiast, and data science enjoyer</p>
	</div>
	<Index />
	<Projex />
	<div class="grid max-w-xl gap-2 py-5">
		<h1 class="bg-gradient-to-b from-blue-300 to-zinc-500 bg-clip-text text-2xl text-transparent">
			Connect
		</h1>
		<p>
			Chat with me on <a
				href="https://discordapp.com/users/clidegamer254"
				target="_blank"
				class="text-[#5865F2]">Discord</a
			>, view my code and open-source projects on
			<a
				class="text-black dark:text-white"
				href="https://github.com/cliffordkleinsr"
				target="_blank">GitHub</a
			>, explore my
			<a
				class="text-white/80"
				href="https://www.linkedin.com/in/clifford-njoroge-7ab4181b6/"
				target="_blank">Linkedin</a
			>
			profile, or email me
			<a href="mailto:cnjoroge925@gmail.com" class="text-cyan-300">directly </a>
		</p>
	</div>
</div>
