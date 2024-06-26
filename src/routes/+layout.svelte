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
	class="px-[calc(theme(spacing.page)/2)] pt-page md:pb-page min-h-screen max-w-4xl mx-auto flex flex-col"
>
	<slot />
</main>
<Footer />
