<script lang="ts">
	import { quintOut } from "svelte/easing";
	import { fly } from "svelte/transition";

	let hasSeen: boolean = false;

	function toggle() {
		hasSeen = true;
	}
</script>

{#if !hasSeen}
	<aside
		transition:fly={{ y: -10, duration: 500, easing: quintOut }}
		class="bg-primary-500 text-white p-1 text-sm fixed inset-x-0 top-0 z-10 flex justify-between items-center max-md:hidden"
	>
		<p><slot /></p>
		<button type="button" on:click={toggle}>
			<svg
				class="stroke-white"
				fill="none"
				height="20"
				width="20"
				shape-rendering="geometricPrecision"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				viewBox="0 0 24 24"
			>
				<path d="M18 6L6 18" />
				<path d="M6 6l12 12" />
			</svg>
		</button>
	</aside>
{/if}
