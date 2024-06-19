<script>
	import { page } from "$app/stores";
	import Button from "$lib/components/ui/Button.svelte";

	export let errorVisible = false;

	function showError() {
		errorVisible = true;
	}
</script>

<div class="pb-navbar flex flex-col items-center justify-center gap-4 grow text-center relative">
	<h1 class="text-6xl font-bold">Sorry!</h1>
	<p class="text-2xl font-light">You're not supposed to be here...</p>
	{#if errorVisible}
		<p aria-hidden>{$page.error?.message}</p>
	{:else}
		<button type="button" class="absolute top-0 left-0 opacity-10" on:click={showError}>
			Show Error
		</button>
	{/if}
	<Button name="Home" href="/">Home</Button>
</div>
