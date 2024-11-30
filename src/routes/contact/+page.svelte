<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { onMount } from 'svelte';

	let isSubmitted = $state(false);
	let loading = $state(false);
	let err = $state<null | string>(null);

	const handleSubmit = async (e: SubmitEvent) => {
		try {
			loading = true;
			e.preventDefault();
			err = null;
			isSubmitted = false;
			const form = e.currentTarget as HTMLFormElement;
			const data = new FormData(form);

			const res = await fetch(form.action, {
				method: form.method,
				body: data,
				headers: {
					Accept: 'application/json'
				}
			});

			if (res.ok) {
				isSubmitted = true;
			} else {
				err = (await res.json())['errors'].map((e: Error) => e['message']).join(', ');
			}
		} catch {
		} finally {
			loading = false;
		}
	};
	onMount(() => {});
</script>

<div class="mx-auto max-w-7xl p-4">
	<h1 class="pt-16 text-7xl">Contact</h1>
	<div class="mb-4 mt-12 flex space-x-12">Contact me using the form below</div>
	<form
		action="https://formspree.io/f/mqakywyy"
		method="POST"
		class=" flex w-full max-w-sm flex-col space-y-4"
		onsubmit={handleSubmit}
	>
		<div>
			<Label>Email</Label>
			<Input name="email" type="email" />
		</div>
		<div>
			<Label>Message</Label>
			<Textarea name="message" />
		</div>
		<p class="text-red-500">{err}</p>
		{#if isSubmitted}
			<span class="text-green-500"
				>Your response has been submitted. I'll get back to you ASAP!</span
			>
		{:else}
			<Button type="submit" disabled={loading || isSubmitted}>Send</Button>
		{/if}
	</form>
	<div class="mt-12">
		<span>Or at any of the following:</span>
		<ul class="mt-4 space-y-4">
			<li>
				<a href="mailto:isaackoz130@gmail.com" class="text-blue-400 underline underline-offset-4"
					>isaackoz130@gmail.com</a
				>
			</li>
			<li>
				<a href="https://github.com/isaackoz" class="text-blue-400 underline underline-offset-4"
					>github.com/isaackoz</a
				>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/isaac-koczwara-27a920167/"
					class="text-blue-400 underline underline-offset-4">linkedin.com</a
				>
			</li>
		</ul>
	</div>
</div>
