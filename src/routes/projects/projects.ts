export type Project = {
	id: string;
	img: string;
	heading: string;
	description: string;
	tags: Array<string>;
};

export const projects: Project[] = [
	{
		id: 'c27',
		heading: 'Online Food Ordering Web App',
		description: 'A full-stack web application for ordering food online. Created with Next.js.',
		img: '/projects/c271.png',
		tags: ['Next.js', 'MongoDB', 'PayloadCMS', 'Node.js', 'Stripe']
	},
	{
		id: 'composium',
		heading: 'Composium.ai',
		description:
			'Tenant based AI chatbot with RAG. Each tenant can configure their own LLM and access it via a managed frontend.',
		img: '/projects/comp1.png',
		tags: ['Nest.js', 'SvelteKit', 'Tenant Based', 'PostgreSQL', 'Supertokens Auth']
	}
];
