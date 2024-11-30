<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { type Project, projects } from './projects';
</script>

{#snippet card(data: Project)}
	<a
		class="group flex h-[500px] w-80 flex-col rounded-2xl border transition-all hover:scale-[1.01] hover:cursor-pointer active:scale-[0.99] sm:w-96"
		href={`/projects/${data.id}`}
	>
		<img
			src={data.img}
			alt="placeholder"
			class="h-[34%] w-96 rounded-t-2xl object-cover brightness-75 group-hover:brightness-100"
		/>
		<div class="h-2/5 w-full overflow-hidden bg-transparent p-4">
			<h2 class="text-xl">
				{data.heading}
			</h2>
			<p class="mt-4 line-clamp-6 text-muted-foreground">
				{data.description}
			</p>
		</div>
		<div class="h-[26%] p-4">
			<div class="flex flex-wrap gap-1">
				{#each data.tags as tag}
					<div class="rounded-full bg-stone-800 px-2 py-1 text-sm">
						{tag}
					</div>
				{/each}
			</div>
			<div class="flex w-full justify-end">
				<Button variant="outline">More details &rarr;</Button>
			</div>
		</div>
	</a>
{/snippet}

<div class="mx-auto max-w-7xl p-4">
	<h1 class="pt-16 text-7xl">Projects</h1>
	<div class="mt-12 flex flex-col gap-12 md:flex-row">
		{#each projects as project}
			{@render card(project)}
		{/each}
	</div>
</div>
