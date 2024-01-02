<script lang="ts">
	import Footer from "$lib/components/navigation/Footer.svelte";
	import Navbar from "$lib/components/navigation/Navbar.svelte";
	import "../app.css";
</script>

<svelte:head>
	<title>Oliver Rindholt</title>
</svelte:head>

<Navbar />
<main
	class="p-[calc(theme(spacing.page)/2)] md:p-page !pt-[calc(theme(spacing.page)+theme(spacing.navbar))] max-w-7xl mx-auto"
>
	<slot />
</main>
<Footer />
