<script lang="ts">
	import Navbar from "$lib/navigation/Navbar.svelte";
	import "../app.css";
</script>

<Navbar />
<main class="p-page pt-[calc(theme(spacing.page)+theme(spacing.navbar))]">
	<slot />
</main>
