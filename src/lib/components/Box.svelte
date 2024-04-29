<script lang="ts">
	import { cn } from "$lib/util/functions";

	export let as: string = "div";
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class={cn(
		"bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-700 text-white shadow-sm rounded-xl p-6",
		$$restProps.class ?? ""
	)}
>
	<slot />
</svelte:element>
