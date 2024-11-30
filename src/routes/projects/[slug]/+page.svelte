<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import type { PageData } from './$types';
	import type { Component } from 'svelte';

	export let data: PageData;

	type C = $$Generic<Component>;
	$: component = data.component as unknown as C;
</script>

<div class="mx-auto mt-12 max-w-prose p-4">
	<a href="/projects" class="text-muted-foreground"> &larr; Back to projects </a>
	<div class="mb-12">
		<h1 class="text-3xl">
			{data.frontmatter.title}
		</h1>
		<p class="text-muted-foreground">
			{data.frontmatter.author}
		</p>
		<p class="text-muted-foreground">
			{data.frontmatter.date}
		</p>
	</div>
	<Separator class="my-12" />
	<div class="prose prose-invert">
		<svelte:component this={component} />
	</div>
</div>
