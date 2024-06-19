<script lang="ts">
	import viewport from "$lib/actions/useViewportAction";
	import { cn } from "$lib/util/helpers";

	let isInViewport: boolean = false;

	export let as: keyof HTMLElementTagNameMap = "div";
</script>

<svelte:element
	this={as}
	use:viewport
	on:viewportEnter={() => (isInViewport = true)}
	on:viewportExit={() => (isInViewport = false)}
	{...$$restProps}
>
	<div
		class="transition-all duration-700 ease-in-out"
		style="opacity: {isInViewport ? 1 : 0}; transform: translateY(-{isInViewport ? 0 : 50}px);"
	>
		<slot />
	</div>
</svelte:element>
