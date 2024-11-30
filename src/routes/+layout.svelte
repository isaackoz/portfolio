<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import {
		Sheet,
		SheetContent,
		SheetDescription,
		SheetHeader,
		SheetTitle,
		SheetTrigger
	} from '$lib/components/ui/sheet';
	import { cn } from '$lib/utils';
	import { MenuIcon } from 'lucide-svelte';

	import '../app.css';
	let { children, data } = $props();
	let isHomePage = $derived(data.pathname === '/');
</script>

<a
	href="https://github.com/isaackoz"
	target="_blank"
	class="fixed right-0 top-0 z-[100] size-48 -translate-y-1/2 translate-x-1/2 rotate-45 bg-muted-foreground transition-all hover:scale-[1.01] hover:cursor-pointer hover:bg-white"
>
	<svg
		role="img"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		class="absolute bottom-4 left-1/2 size-12 -translate-x-1/2 -rotate-45 stroke-black"
		><title>GitHub</title><path
			d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
		/></svg
	>
</a>

<ScrollArea class="h-svh bg-gradient-to-b from-gray-950 to-black">
	<header class=" relative z-50 h-32 w-full bg-transparent backdrop-blur-xl">
		<Sheet>
			<SheetTrigger class="absolute left-4 top-1/2 -translate-y-1/2 xl:hidden">
				<MenuIcon class="size-12" />
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Isaac Koczwara</SheetTitle>
				</SheetHeader>
				<div class="mt-12 flex w-full flex-col space-y-4">
					<Button variant="outline" class="w-full" href="/">Home</Button>
					<Button variant="outline" class="w-full" href="/about">About</Button>
					<Button variant="outline" class="w-full" href="/projects">Projects</Button>
					<Button variant="outline" class="w-full" href="/skills">Skills</Button>
					<Button variant="outline" class="w-full" href="/contact">Contact</Button>
				</div>
			</SheetContent>
		</Sheet>
		<div class="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
			<!-- <a class="w-full font-sans text-lg font-semibold tracking-[0.3em]" href="/">Isaac Koczwara</a> -->
			<nav class="flex w-full items-center justify-between">
				<ul class="flex w-full items-center justify-between space-x-2">
					<li>
						<a
							href="/about"
							class={cn(
								'hidden tracking-wider text-foreground transition-all hover:text-muted-foreground xl:block',
								data.pathname === '/about' && 'text-primary hover:text-primary'
							)}>About</a
						>
					</li>
					<li>
						<a
							href="/projects"
							class={cn(
								'hidden tracking-wider text-foreground transition-all hover:text-muted-foreground xl:block',
								data.pathname === '/projects' && 'text-primary hover:text-primary'
							)}>Projects</a
						>
					</li>
					<li>
						<a
							href="/"
							aria-label="Home"
							title="/"
							class="flex size-[15rem] items-end tracking-wider text-foreground transition-all hover:text-muted-foreground"
						>
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 792 612">
								<g>
									<g id="Layer_4">
										<g>
											<path
												class={cn(isHomePage ? 'fill-[#e0922f]' : '')}
												d="M382.7,538.48l-225.47-265.67h83.48l-.88-73.04h-61.79s-87.67-91.79-87.67-91.79h292.33v91.1l-49.47.51,2.32,122.22,47.15,55.17v161.49ZM243.65,312.81l99.06,116.72v-37.78l-46.87-54.84-3.36-176.9,50.23-.51v-11.5h-158.81l11.26,11.79h84.2s1.85,153.04,1.85,153.04h-37.55Z"
											/>
											<path
												class="fill-[#272525]"
												d="M376.7,522.14l-206.51-243.32h76.59l-1.03-85.04h-65.15s-76.21-79.79-76.21-79.79h272.31v79.16l-49.59.51,2.48,130.43,47.11,55.12v142.94ZM230.68,306.82l118.02,139.06v-56.34l-46.91-54.89-3.21-168.7,50.12-.51v-23.44h-178.84l22.72,23.79h80.84s1.71,141.04,1.71,141.04h-44.44Z"
											/>
											<polygon
												class="fill-gray-200"
												points="362.7 484.01 362.7 384.37 315.69 329.36 312.85 179.8 362.7 179.29 362.7 127.99 137.13 127.99 186.59 179.78 259.59 179.78 260.96 292.82 200.44 292.82 362.7 484.01"
											/>
										</g>
										<g>
											<polygon
												class={cn('stroke-[#e0922f] stroke-[0px]', isHomePage && 'stroke-[40px]')}
												points="417.51 483.82 417.51 128.18 476.09 128.18 475.44 205.37 524.16 183.45 525.66 128.18 644.17 128.18 581.26 210.59 496.12 250.34 581.26 293 500.31 387.33 497.95 318.14 464.33 298.4 467.29 425.81 417.51 483.82"
											/>
											<polygon
												class="stroke-[#272525] stroke-[28px]"
												points="417.51 483.82 417.51 128.18 476.09 128.18 475.44 205.37 524.16 183.45 525.66 128.18 644.17 128.18 581.26 210.59 496.12 250.34 581.26 293 500.31 387.33 497.95 318.14 464.33 298.4 467.29 425.81 417.51 483.82"
											/>
											<polygon
												class="fill-gray-200"
												points="417.51 483.82 417.51 128.18 476.09 128.18 475.44 205.37 524.16 183.45 525.66 128.18 644.17 128.18 581.26 210.59 496.12 250.34 581.26 293 500.31 387.33 497.95 318.14 464.33 298.4 467.29 425.81 417.51 483.82"
											/>
										</g>
									</g>
								</g>
							</svg>
						</a>
					</li>
					<li>
						<a
							href="/skills"
							class={cn(
								'hidden tracking-wider text-foreground transition-all hover:text-muted-foreground xl:block',
								data.pathname === '/skills' && 'text-primary hover:text-primary'
							)}>Skills</a
						>
					</li>
					<li>
						<a
							href="/contact"
							class={cn(
								'hidden tracking-wider text-foreground transition-all hover:text-muted-foreground xl:block',
								data.pathname === '/contact' && 'text-primary hover:text-primary'
							)}>Contact</a
						>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<main class="relative h-[calc(100svh-8rem)]">
		{@render children()}
	</main>
</ScrollArea>
