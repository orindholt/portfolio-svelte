<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let shown = false;
	let coords = { x: 0, y: 0 };

	onMount(() => {
		if (window.innerWidth < 1024) return;
		document.addEventListener("mousemove", (e) => {
			coords.x = e.clientX;
			coords.y = e.clientY;
			const target = e.target as HTMLElement;
			const outOfBounds =
				e.clientY < 10 ||
				e.clientY > window.innerHeight - 10 ||
				e.clientX < 10 ||
				e.clientX > window.innerWidth - 10;
			if ((target && target.tagName === "BODY") || target.tagName === "HTML" || outOfBounds)
				shown = false;
			else shown = true;
		});
	});
</script>

{#if shown}
	<svg
		width="50"
		height="50"
		viewBox="0 0 50 50"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		transition:fade
		class="rounded-full w-10 h-10 fixed top-0 left-0 z-50 pointer-events-none transition-all ease-out duration-700 text-gray-normal"
		style="left:{Math.max(coords.x - 16, 0)}px; top:{Math.max(coords.y - 16, 0)}px"
	>
		<circle cx="25" cy="25" r="24" stroke="currentColor" stroke-width="2" />
	</svg>
{/if}
