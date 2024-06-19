<script lang="ts">
	import { cn } from "$lib/util/helpers";

	export let as: keyof HTMLElementTagNameMap = "div";
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class={cn(
		"bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 text-white shadow-sm rounded-xl p-6 card",
		$$restProps.class ?? ""
	)}
>
	<slot />
</svelte:element>
