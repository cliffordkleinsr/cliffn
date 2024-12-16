import type { Post } from '$lib/types';
import type { RequestHandler } from './$types';

const getPosts = async () => {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/lib/posts/*.svx', {
		eager: true
	});
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;

			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	return posts;
};
export const GET: RequestHandler = async () => {
	const posts = await getPosts();

	return new Response(JSON.stringify(posts), { status: 200 });
};
