<script lang="ts">
	import { onMount } from "svelte";

	let progress = 0;

	onMount(() => {
		window.addEventListener("scroll", () => {
			const scrollable = document.documentElement.scrollHeight - window.innerHeight;
			progress = (window.scrollY / scrollable) * 100;
		});
	});
</script>

<div
	class="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-primary-500 to-primary-400 bg-fixed"
	aria-hidden
	style={`width: ${progress}%`}
/>
