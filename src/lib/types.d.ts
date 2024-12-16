type Categories = 'sveltekit' | 'svelte' | 'html2pdf';

interface Post {
	title: string;
	slug: string;
	date: Date;
	categories: Categories[];
	published: boolean;
}

export { Post };
