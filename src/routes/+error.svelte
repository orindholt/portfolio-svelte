<script>
	import { page } from "$app/stores";
	import Button from "$lib/components/Button.svelte";
</script>

<div
	class="min-h-[calc(100vh-theme(spacing.navbar)-theme(spacing.page)*2)] flex flex-col items-center justify-center gap-4"
>
	<h1 class="text-4xl font-bold">Sorry, something went wrong..</h1>
	<p>{$page.error?.message}</p>
	<Button href="/">Home</Button>
</div>
