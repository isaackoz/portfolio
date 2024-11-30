import type { Component } from 'svelte';
import Nextjs from './icons/nextjs.svelte';
import Nestjs from './icons/nestjs.svelte';
import Astro from './icons/astro.svelte';
import Golang from './icons/golang.svelte';
import Javascripticon from './icons/javascripticon.svelte';
import Tsicon from './icons/tsicon.svelte';
import Pythonicon from './icons/pythonicon.svelte';
import Cpp from './icons/cpp.svelte';
import Svelteicon from './icons/svelteicon.svelte';
import Expressjs from './icons/expressjs.svelte';
import React from './icons/react.svelte';
import Postgresql from './icons/postgresql.svelte';
import Mongo from './icons/mongo.svelte';
import Redis from './icons/redis.svelte';
import Awss3 from './icons/awss3.svelte';
import Awsec2 from './icons/awsec2.svelte';
import Awsroute53 from './icons/awsroute53.svelte';
import Firebase from './icons/firebase.svelte';
import Digitalocean from './icons/digitalocean.svelte';
import Drizzle from './icons/drizzle.svelte';
import Prisma from './icons/prisma.svelte';
import Git from './icons/git.svelte';
import Eslint from './icons/eslint.svelte';
import Prettier from './icons/prettier.svelte';
import Docker from './icons/docker.svelte';
import Ghactions from './icons/ghactions.svelte';
import Vercel from './icons/vercel.svelte';
import Tailwind from './icons/tailwind.svelte';

export type SkillList = {
	category: string;
	skills: Array<{
		id: string;
		name: string;
		href: string;
		icon: Component;
	}>;
}[];

export const skillList: SkillList = [
	{
		category: 'Frameworks',
		skills: [
			{
				id: 'nextjs',
				name: 'Next.js',
				href: 'https://nextjs.org/',
				icon: Nextjs
			},
			{
				id: 'nestjs',
				name: 'Nest.js',
				href: 'https://nestjs.com/',
				icon: Nestjs
			},
			{
				id: 'astro',
				name: 'Astro',
				href: 'https://astro.build/',
				icon: Astro
			},
			{
				id: 'svelte',
				name: 'Svelte',
				href: 'https://svelte.dev/',
				icon: Svelteicon
			},
			{
				id: 'express',
				name: 'Express.js',
				href: 'https://expressjs.com/',
				icon: Expressjs
			},
			{
				id: 'react',
				name: 'React (library)',
				href: 'https://react.dev/',
				icon: React
			}
		]
	},
	{
		category: 'Languages',
		skills: [
			{
				id: 'go',
				name: 'Go',
				href: 'https://go.dev/',
				icon: Golang
			},
			{
				id: 'javascript',
				name: 'JavaScript',
				href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
				icon: Javascripticon
			},
			{
				id: 'typescript',
				name: 'TypeScript',
				href: 'https://www.typescriptlang.org/',
				icon: Tsicon
			},
			{
				id: 'python',
				name: 'Python',
				href: 'https://www.python.org/',
				icon: Pythonicon
			},
			{
				id: 'C++',
				name: 'C++',
				href: 'https://en.wikipedia.org/wiki/C%2B%2B',
				icon: Cpp
			}
		]
	},
	{
		category: 'Databases',
		skills: [
			{
				id: 'postgresql',
				name: 'PostgreSQL',
				href: 'https://www.postgresql.org/',
				icon: Postgresql
			},
			{
				id: 'mongodb',
				name: 'MongoDB',
				href: 'https://www.mongodb.com/',
				icon: Mongo
			},
			{
				id: 'redis',
				name: 'Redis',
				href: 'https://redis.io/',
				icon: Redis
			},
			{
				id: 'drizzle',
				name: 'Drizzle ORM',
				href: 'https://orm.drizzle.team/',
				icon: Drizzle
			},
			{
				id: 'prisma',
				name: 'Prisma ORM',
				href: 'https://www.prisma.io/',
				icon: Prisma
			}
		]
	},
	{
		category: 'Cloud',
		skills: [
			{
				id: 'AWSs3',
				name: 'Amazon S3',
				href: 'https://aws.amazon.com/',
				icon: Awss3
			},
			{
				id: 'awsec2',
				name: 'Amazon EC2',
				href: 'https://aws.amazon.com/',
				icon: Awsec2
			},
			{
				id: 'awsroute53',
				name: 'Amazon Route 53',
				href: 'https://aws.amazon.com/',
				icon: Awsroute53
			},
			{
				id: 'firebase',
				name: 'Firebase',
				href: 'https://firebase.google.com/',
				icon: Firebase
			},
			{
				id: 'digitalocean',
				name: 'DigitalOcean',
				href: 'https://www.digitalocean.com/',
				icon: Digitalocean
			},
			{
				id: 'vercel',
				name: 'Vercel',
				href: 'https://vercel.com/',
				icon: Vercel
			}
		]
	},
	{
		category: 'Tools/Others',
		skills: [
			{
				id: 'git',
				href: 'https://git-scm.com/',
				name: 'Git',
				icon: Git
			},
			{
				id: 'ESLint',
				href: 'https://eslint.org/',
				name: 'ESLint',
				icon: Eslint
			},
			{
				id: 'Prettier',
				href: 'https://prettier.io/',
				name: 'Prettier',
				icon: Prettier
			},
			{
				id: 'Docker',
				href: 'https://www.docker.com/',
				name: 'Docker',
				icon: Docker
			},
			{
				id: 'ghactions',
				href: 'https://github.com/features/actions',
				name: 'Github Actions',
				icon: Ghactions
			},
			{
				id: 'tailwindcss',
				name: 'TailwindCSS',
				href: 'https://tailwindcss.com/',
				icon: Tailwind
			}
		]
	}
];
