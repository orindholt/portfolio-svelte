<script lang="ts">
	import Footer from "$lib/components/navigation/Footer.svelte";
	import Navbar from "$lib/components/navigation/Navbar.svelte";
	import { onMount } from "svelte";
	import "../app.css";
	import Spinner from "$lib/components/Spinner.svelte";

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Oliver Rindholt</title>
</svelte:head>

<Navbar />
<main
	class="p-[calc(theme(spacing.page)/2)] md:p-page md:!pt-[calc(theme(spacing.page)+theme(spacing.navbar))] min-h-screen max-w-4xl mx-auto flex flex-col"
>
	{#if !mounted}
		<Spinner class="fixed inset-0 m-auto text-5xl" />
	{:else}
		<slot />
	{/if}
</main>
<Footer />
