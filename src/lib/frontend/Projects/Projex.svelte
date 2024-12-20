<script lang="ts">
	import Globe from 'lucide-svelte/icons/globe';
	import ProjectCard from './ProjectCard.svelte';
	import Book from 'lucide-svelte/icons/book';
	import FileText from 'lucide-svelte/icons/file-text';

	const projects = [
		{
			href: 'https://int-insights.com',
			title: 'Intuitive Insights',
			description: `
				With the growing need for data in the current era,
				there is a need for robust data collection and processing platforms.
				Enter Intuitive Insights, a SaaS which allows prospective clients to collect& conduct a variety
				of polls. This is a great way to prospective clients to better understand their organization in an ever changing market.
				`,
			dates: 'May 2024 - Aug 2024',
			tags: ['Typescript', 'PostgreSQL', 'TailwindCSS', 'Shadcn UI'],
			image: '',
			video:
				'https://res.cloudinary.com/dmy8yp9el/video/upload/v1734525005/pm3sr316ynre0gk5qkq7.mp4',
			links: [
				{
					icon: Globe,
					type: 'website',
					href: 'https://int-insights.com'
				}
			]
		},
		{
			href: 'https://github.com/JonathonRP/motion-start',
			title: 'Motion Start',
			description: `
				Motion Start is an animation library based on the React library framer-motion.
			`,
			dates: 'Sep 2023 - Ongoing',
			tags: ['Vite', 'React', 'SvelteKit', 'Popmotion', 'TailwindCSS', 'Shadcn UI', 'BiomeJS'],
			video:
				'https://res.cloudinary.com/dmy8yp9el/video/upload/v1734527570/Motion_Start_gqj2ym.mp4',
			links: [
				{
					icon: Globe,
					type: 'GitHub',
					href: 'https://github.com/JonathonRP/motion-start'
				}
			]
		},
		{
			href: 'https://undp-bay.vercel.app/',
			title: 'UNDP Finance for Forcibly Displaced Persons.',
			description: `
				This was a questionnaire developed for the United Nations (UNCDF, UNDP and UNHCR). 
				The purpose of this questionnaire was to collect information on organization’s financial services within FDP locations,
				in order to improve our understanding on the factors contributing to constraints in extending financial services. 
			`,
			dates: 'Nov 2024 - Ongoing',
			tags: ['SvelteKit', 'Supabase', 'TailwindCSS', 'Shadcn UI', 'Activetable'],
			video: 'https://res.cloudinary.com/dmy8yp9el/video/upload/v1734588340/UNDP_i6an0i.mp4',
			links: [
				{
					icon: Globe,
					type: 'website',
					href: 'https://undp-bay.vercel.app/'
				}
			]
		},
		{
			href: 'https://documents1.worldbank.org/curated/en/099051624114042163/pdf/P1787061921ca30fc187161b7d84a5e4532.pdf',
			title: 'Syria Poverty Mapping ©WBG 2024',
			description: `
				Modeling poverty in Syria is particularly challenging due to the lack
				of any reliable welfare estimates since the onset of the conflict.
				The increasing availability of remote sensing data within the public domain and advances in
				the use of machine learning have increased the ability to predict poverty. 
			`,
			dates: 'July 2023 - Sep 2023',
			tags: ['Colab', 'Earth-Engine', 'Geemap', 'Garmin', 'NOAA', 'DMSP OLS', 'NVIIRS'],
			image:
				'https://res.cloudinary.com/dmy8yp9el/image/upload/v1734589287/Screenshot_2024-12-19_092012_drmqqb.png',
			links: [
				{
					icon: FileText,
					type: 'Publication',
					href: 'https://documents1.worldbank.org/curated/en/099051624114042163/pdf/P1787061921ca30fc187161b7d84a5e4532.pdf'
				}
			]
		},
		{
			href: 'https://www.adb.org/publications/machine-learning-satellite-imagery-road-quality-monitoring',
			title: 'Road Quality Monitoring ©ADB.',
			description: `
				Artificial intelligence methods that leverage satellite data to monitor
				the quality of roads can significantly lower the costs of road maintenance.
				However, high-resolution proprietary satellite image collections are expensive.
				The project develops a super-resolution model using generative adversarial
				network to improve the resolution of publicly available road imagery.
			`,
			dates: 'May 2022 - Sep 2024',
			tags: ['Colab', 'Earth-Engine', 'Python', 'Pytorch', 'Lightning', 'NAIP', 'Sentinel'],
			image:
				'https://www.adb.org/sites/default/files/cover-ewp-675-machine-learning-satellite-image-road-quality.png',
			links: [
				{
					icon: FileText,
					type: 'Publication',
					href: 'https://www.adb.org/publications/machine-learning-satellite-imagery-road-quality-monitoring'
				}
			]
		},
		{
			href: 'https://github.com/cliffordkleinsr/DE-SRFREN',
			title: 'DE-SRFREN',
			description: `
				DE-SRFREN which denotes Decode Super Resolve  Frame Restore Enhance 
				is a video restoration pipeline which builds upon various cutting-edge technologies using super resolution algorithms to create a video enhancement pipeline.
			`,
			dates: 'Sep 2022 - Jan - 2023',
			tags: ['Transformers', 'Python', 'Pytorch', 'BasicSR', 'Torchvision'],
			image:
				'https://res.cloudinary.com/dmy8yp9el/image/upload/v1734528263/Screenshot_2024-08-16_073317_v97wwa.png',
			links: [
				{
					icon: Globe,
					type: 'GitHub',
					href: 'https://github.com/cliffordkleinsr/DE-SRFREN'
				}
			]
		}
	];
</script>

<div class="max-w-xl" id="projects">
	<h1
		class="bg-gradient-to-b from-blue-300 to-zinc-500 bg-clip-text py-5 text-2xl text-transparent"
	>
		Selected Projects
	</h1>
	<p class="text-base/relaxed text-muted-foreground">
		I&apos;ve worked on a variety of projects, from machine learning algorithms to complex web
		applications. Here are a few of my favorites.
	</p>
	<div class="grid grid-cols-2 gap-2 py-11">
		{#each projects as project}
			<ProjectCard
				href={project.href}
				title={project.title}
				description={project.description}
				dates={project.dates}
				tags={project.tags}
				image={project.image}
				video={project.video}
				links={project.links}
			/>
		{/each}
	</div>
</div>
