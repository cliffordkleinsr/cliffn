<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<div class="grid max-w-full justify-center gap-2 py-14 text-primary/50">
	<h1 class="text-lg">Clifford Njoroge</h1>
	<Avatar.Root>
		<Avatar.Image
			src="https://res.cloudinary.com/dmy8yp9el/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1728725657/kratos.webp"
			alt="kratos"
		/>
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>
	<p class="max-w-md">
		Web Designer, Game Developer, Avid Machine learning enthusiast, and data science enjoyer
	</p>
</div>
