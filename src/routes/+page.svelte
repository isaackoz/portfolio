<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Card,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Paperclip } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<div class="mx-auto flex h-full max-w-7xl flex-col p-4">
	<section class="z-10 grid gap-x-12 pt-12 xl:grid-cols-3 xl:pt-24">
		<div class="col-span-2">
			<div class="text-5xl text-muted-foreground">I am</div>
			<h1 class="z-10 mb-4 mt-auto text-7xl font-bold tracking-[0.2em] text-white">
				{#each 'Isaac Koczwara' as key, i}
					<span in:fade|global={{ duration: 800, delay: i * 50 }}>
						{key}
					</span>
				{/each}
			</h1>
			<p class="mb-4 text-2xl tracking-wider text-muted-foreground">
				— a software-engineer based in Southern California
			</p>
			<p class=" text-lg">
				Hi, my name is Isaac Koczwara and I am a software engineer based out of southern California.
				I have a B.A. in Computer Science from California State University, Fullerton. In my free
				time, I enjoy working on personal projects.
			</p>
			<div class="mt-12"></div>
		</div>
		<div>
			<div class="h-full w-full rounded-xl">
				<img
					src="/isaac.png"
					alt="Isaac Koczwara Headshot"
					width={300}
					class="pointer-events-none rounded-xl brightness-90"
				/>
			</div>
		</div>
	</section>
	<section class="mt-4">
		<Button
			variant="outline"
			class="flex h-12 w-fit items-center justify-between"
			href="/resume-isaac-1.pdf"
			target="_blank"
		>
			<div class="flex space-x-4">
				<Paperclip />
				<span>Resume</span>
			</div>
			<div>&rarr;</div>
		</Button>
	</section>
	<div class="mt-auto text-center text-xl italic tracking-wide">
		Your friendly neighborhood programmer
	</div>
</div>

<!-- <Card
	class="absolute left-0 top-1/2 max-w-2xl -translate-y-[15%] translate-x-1/3 border-none border-primary"
>
	<CardHeader>
		<CardTitle>Hi my name is Isaac Koczwara</CardTitle>
		<CardDescription class=" text-lg">
			Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
			classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
			Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
			words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
			classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
			1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
			Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
			the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
			line in section 1.10.32.
		</CardDescription>
	</CardHeader>
	<CardFooter class="flex justify-end space-x-4">
		<Button variant="secondary" class="h-fit w-28 tracking-wider">Projects</Button>
		<Button variant="secondary" class="h-fit w-28 tracking-wider">Skills</Button>
		<Button class="h-fit w-28 tracking-wider">Contact</Button>
	</CardFooter>
</Card> -->

<div></div>
