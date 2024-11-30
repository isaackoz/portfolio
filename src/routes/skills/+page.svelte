<script>
	import { skillList } from './skill-list';
</script>

<div class="mx-auto max-w-7xl p-4">
	<h1 class="pt-16 text-7xl">Skills</h1>
	<p class="text-muted-foreground">
		The following are languages/frameworks/concepts that I am familier with.
	</p>
	<div class="mt-12 flex flex-col space-y-12 pb-24">
		{#each skillList as category}
			<div class="w-full">
				<h2 class="mb-2 text-lg">{category.category}</h2>
				<div class="flex flex-wrap gap-2">
					{#each category.skills as skill}
						<a
							class="flex size-32 flex-col space-y-2 rounded-md fill-gray-300 text-center transition-colors hover:bg-gray-900"
							href={skill.href}
							target="_blank"
							referrerpolicy="no-referrer"
						>
							<skill.icon />
							<h3>{skill.name}</h3>
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div class="pb-24">
		<h2 class="text-lg">Non-Technical</h2>
		<ul class="list-inside list-disc">
			<li>Public speaking</li>
			<li>Collaboration</li>
			<li>Project Management</li>
			<li>Critical Thinking</li>
		</ul>
	</div>
</div>
