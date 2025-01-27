<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	let { data }: { data: PageData } = $props();

	let labdata = import.meta.glob('/src/lib/frontend/Scenes/*.svelte', {
		eager: true
	});

	let slugs: any[] = [];
	for (const path in labdata) {
		const file = labdata[path];
		const slug = path.split('/').at(-1);

		slugs.push(slug);
	}
</script>

<div class="h-[95vh]">
	<div
		class="group group relative mx-auto flex h-[500px] w-[850px] flex-col place-items-center overflow-hidden rounded-lg bg-zinc-950 p-4"
	>
		<div class="relative z-0 w-full flex-grow overflow-hidden">
			<div class="absolute left-0 z-0 flex h-full w-full">
				<div class="content-scroll absolute left-0 right-0">
					<div class="fixed left-6 h-[calc(100%-153px)] w-[1px] bg-zinc-600/40"></div>
					<div class="pl-16">
						<div class="flex h-[304px] items-center justify-center">
							<div
								class="relative isolate z-30 mr-6 flex w-full flex-col rounded-md border border-zinc-600 border-opacity-40 bg-[#070709] p-3"
							>
								<div
									class="absolute -left-[44px] top-1/2 h-[1px] w-[44px] -translate-y-1/2 bg-zinc-600 opacity-70"
								></div>
								<div
									class="absolute -left-[45px] top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full border border-zinc-600 bg-purple-600"
								></div>
								<div class="flex flex-col space-y-3">
									<div class="flex items-center justify-between">
										<div class="flex items-center space-x-3">
											<div
												class="relative h-12 w-12 overflow-hidden rounded-md border border-zinc-600 border-opacity-40"
											>
												<div
													class="absolute right-0 top-3/4 h-5 w-5 -translate-y-1/2 bg-purple-600 blur-[13px]"
												></div>
												<svg
													class="isolate p-[7px]"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 22 22"
													><path
														fill="white"
														d="M20 19H2v-2h2V9H2V7h1V6h2V5h2V4h2V3h4v1h2v1h2v1h2v1h1v2h-2v8h2m-3-8V7h-2V6h-2V5H9v1H7v1H5v2m3 8v-6H6v6m6 0v-6h-2v6m6 0v-6h-2v6Z"
													></path></svg
												>
											</div>
											<div class="flex flex-col items-start justify-start">
												<div class="font-medium text-zinc-100">Fintech Security Suite</div>
												<div class="text-sm text-zinc-400">
													Completed September 2023 in three weeks.
												</div>
											</div>
										</div>
										<div class="text-sm italic text-zinc-400">
											Financial Services, Cybersecurity
										</div>
									</div>
									<div class="flex items-center space-x-2 border-l-2 border-purple-600/30 pl-3">
										<div class="text-sm italic text-purple-600">
											"This suite revolutionized how we handle security. The ROI was evident within
											the first month."
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex h-[304px] items-center justify-center">
							<div
								class="relative isolate z-30 mr-6 flex w-full flex-col rounded-md border border-zinc-600 border-opacity-40 bg-[#070709] p-3"
							>
								<div
									class="absolute -left-[44px] top-1/2 h-[1px] w-[44px] -translate-y-1/2 bg-zinc-600 opacity-70"
								></div>
								<div
									class="absolute -left-[45px] top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full border border-zinc-600 bg-emerald-500"
								></div>
								<div class="flex flex-col space-y-3">
									<div class="flex items-center justify-between">
										<div class="flex items-center space-x-3">
											<div
												class="relative h-12 w-12 overflow-hidden rounded-md border border-zinc-600 border-opacity-40"
											>
												<div
													class="absolute right-0 top-3/4 h-5 w-5 -translate-y-1/2 bg-emerald-600 blur-[13px]"
												></div>
												<svg
													class="isolate p-[7px]"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													><path
														fill="none"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="1.5"
														d="m6.194 11.397l5.998-8.085c.47-.632 1.348-.239 1.348.603v6.258c0 .505.345.913.77.913h2.918c.663 0 1.016.927.578 1.518l-5.998 8.084c-.47.632-1.348.239-1.348-.603v-6.258c0-.505-.345-.913-.77-.913H6.771c-.663 0-1.016-.927-.578-1.517"
														color="white"
													></path></svg
												>
											</div>
											<div class="flex flex-col items-start justify-start">
												<div class="font-medium text-zinc-100">Sustainable Energy Monitoring</div>
												<div class="text-sm text-zinc-400">
													Completed November 2023 in two weeks.
												</div>
											</div>
										</div>
										<div class="text-sm italic text-zinc-400">CleanTech, IoT Solutions</div>
									</div>
									<div class="flex items-center space-x-2 border-l-2 border-emerald-600/30 pl-3">
										<div class="text-sm italic text-emerald-600">
											"Implemented across 200 buildings, achieving 30% energy savings and 92%
											maintenance prediction accuracy."
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex h-[304px] items-center justify-center">
							<div
								class="relative isolate z-30 mr-6 flex w-full flex-col rounded-md border border-zinc-600 border-opacity-40 bg-[#070709] p-3"
							>
								<div
									class="absolute -left-[44px] top-1/2 h-[1px] w-[44px] -translate-y-1/2 bg-zinc-600 opacity-70"
								></div>
								<div
									class="absolute -left-[45px] top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full border border-zinc-600 bg-blue-600"
								></div>
								<div class="flex flex-col space-y-3">
									<div class="flex items-center justify-between">
										<div class="flex items-center space-x-3">
											<div
												class="relative h-12 w-12 overflow-hidden rounded-md border border-zinc-600 border-opacity-40"
											>
												<div
													class="absolute right-0 top-3/4 h-5 w-5 -translate-y-1/2 bg-blue-600 blur-[13px]"
												></div>
												<svg
													class="isolate p-[5px]"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 48 48"
													><g fill="white"
														><path d="M22.5 20.5V17h2v3.5H28v2h-3.5V26h-2v-3.5H19v-2z"></path><path
															fill-rule="evenodd"
															d="M7.057 31.476A2 2 0 0 1 7 31V12a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2v19c0 .244-.044.477-.123.693l3.111 4.76A1 1 0 0 1 43.151 38H4.8a1 1 0 0 1-.849-1.528zM9 12h30v19H9z"
															clip-rule="evenodd"
														></path></g
													></svg
												>
											</div>
											<div class="flex flex-col items-start justify-start">
												<div class="font-medium text-zinc-100">Healthcare Analytics Platform</div>
												<div class="text-sm text-zinc-400">
													Completed December 2023 in two weeks.
												</div>
											</div>
										</div>
										<div class="text-sm italic text-zinc-400">Medical Tech, B2B SaaS</div>
									</div>
									<div class="flex items-center space-x-2 border-l-2 border-blue-600/30 pl-3">
										<div class="text-sm italic text-blue-600">
											"Processing 1M+ daily records with 45% faster diagnosis times and 98% accuracy
											in predictions."
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex h-[304px] items-center justify-center">
							<div
								class="relative isolate z-30 mr-6 flex w-full flex-col rounded-md border border-zinc-600 border-opacity-40 bg-[#070709] p-3"
							>
								<div
									class="absolute -left-[44px] top-1/2 h-[1px] w-[44px] -translate-y-1/2 bg-zinc-600 opacity-70"
								></div>
								<div
									class="absolute -left-[45px] top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full border border-zinc-600 bg-amber-500"
								></div>
								<div class="flex flex-col space-y-3">
									<div class="flex items-center justify-between">
										<div class="flex items-center space-x-3">
											<div
												class="relative h-12 w-12 overflow-hidden rounded-md border border-zinc-600 border-opacity-40"
											>
												<div
													class="absolute right-0 top-3/4 h-5 w-5 -translate-y-1/2 bg-amber-600 blur-[13px]"
												></div>
												<svg
													class="isolate p-[7px]"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 14 14"
													><g
														fill="none"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
														><path d="M11.366 7.318a5.506 5.506 0 1 0-7.549 3.736M.512 6.006h11.011"
														></path><path
															d="M4.382 8.547a9.5 9.5 0 0 1-.484-2.541A9.5 9.5 0 0 1 6.016.5a9.5 9.5 0 0 1 2.117 5.506A10 10 0 0 1 8.02 7.06m1.438 1.118l4.03 1.746l-4.03 1.746L5.43 9.924l4.03-1.746Z"
														></path><path
															d="m7.257 10.72l.004 1.9s.665.88 2.197.88s2.2-.88 2.2-.88v-1.9m-6.229 2.275V9.924"
														></path></g
													></svg
												>
											</div>
											<div class="flex flex-col items-start justify-start">
												<div class="font-medium text-zinc-100">AI-Powered Education Platform</div>
												<div class="text-sm text-zinc-400">
													Completed January 2024 in two weeks.
												</div>
											</div>
										</div>
										<div class="text-sm italic text-zinc-400">EdTech, Machine Learning</div>
									</div>
									<div class="flex items-center space-x-2 border-l-2 border-amber-600/30 pl-3">
										<div class="text-sm italic text-amber-600">
											"Serving 50,000+ students with AI-driven personalization, resulting in 45%
											increased engagement rates."
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="absolute left-0 right-0 top-0 z-20 h-12 bg-gradient-to-b from-zinc-950 to-transparent"
			></div>
			<div
				class="absolute bottom-0 left-0 right-0 z-20 h-12 bg-gradient-to-t from-zinc-950 to-transparent"
			></div>
		</div>
		<div class="mt-3 flex flex-col transition duration-700">
			<p class="mb-2 text-2xl font-semibold text-white">We Get It Done</p>
			<p class="text-zinc-300">
				We are known for getting projects done fast. Most apps are built within 2 weeks.
			</p>
		</div>
	</div>
</div>

<!-- <div class="mx-auto grid gap-2 lg:grid-cols-2">
	{#each slugs as slug}
		<Card.Root>
			<Card.Header>
				<Card.Title>{slug.split('.')[0]}</Card.Title>
				<Card.Description></Card.Description>
			</Card.Header>
			<Card.Content></Card.Content>
			<Card.Footer>
				<Button variant="secondary"><ArrowUpRight /> View</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
</div> -->

<style>
	.content-scroll {
		animation: scroll 20s ease-in-out infinite;
	}

	@keyframes scroll {
		0%,
		12% {
			transform: translateY(0);
		}
		20%,
		37% {
			transform: translateY(-304px);
		}
		45%,
		62% {
			transform: translateY(-604px);
		}
		70%,
		87% {
			transform: translateY(-906px);
		}
		95%,
		100% {
			transform: translateY(0);
		}
	}
</style>
