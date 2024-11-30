<script>
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { Button } from '$lib/components/ui/button';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { Paperclip } from 'lucide-svelte';
</script>

<div class="relative z-10 mx-auto h-full max-w-7xl p-4">
	<div class="relative pt-56 md:ml-[10%] xl:ml-[25%] xl:pt-36">
		<h1
			class="absolute top-4 z-10 text-7xl font-extrabold uppercase [text-shadow:_1px_2px_2px_rgb(0_0_0)] md:-left-12 xl:-left-36 xl:top-12"
		>
			A little <br /> bit about <br /> myself
		</h1>
		<AspectRatio ratio={16 / 9} class="overflow-hidden rounded-lg bg-slate-500">
			<img
				src="/isaac-europe.jpg"
				alt="Isaac Koczwara in Amsterdam"
				class="rounded-lg object-contain"
			/>
		</AspectRatio>

		<div
			class="mt-12 grid grid-flow-row grid-rows-1 gap-y-12 pb-12 text-lg md:grid-cols-2 md:gap-x-24"
		>
			<div class="space-y-8">
				<p class="indent-8">
					Hello! My name is Isaac Koczwara, and I'm a passionate 23-year-old software engineer
					living in Southern California. I graduated in Fall 2024 from California State University,
					California, with a Bachelor's degree in Computer Science.
				</p>
				<p class="indent-8">
					I thrive on exploring new technologies and expanding my knowledge through self-learning
					and hands-on projects. My skills span across a wide range of disciplines, including web
					development with frameworks like Next.js and React, backend engineering with TypeScript
					and Golang, and creating powerful CLI tools. I also have experience with CI/CD, DevOps
					practices, and building AI-driven web applications.
				</p>
			</div>
			<div class="flex flex-col">
				<p class="indent-8">
					When I'm not coding, you'll often find me diving into exciting new projects or mastering
					the latest tech trends. My commitment to continuous learning drives my work, and I enjoy
					pushing the boundaries of what's possible in the ever-evolving world of software
					development.
				</p>
				<div class="mt-4 h-full">
					<Button
						variant="outline"
						class="flex h-12 w-full items-center justify-between"
						href="/resume-isaac-1.pdf"
						target="_blank"
					>
						<div class="flex space-x-4">
							<Paperclip />
							<span>Resume</span>
						</div>
						<div>&rarr;</div>
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
