<script lang="ts">
	import { cn } from "$lib/util/functions";
	import type { ButtonType } from "$lib/util/types";

	export let type: ButtonType = "button";
	export let href: string = "";
</script>

<svelte:element
	this={href ? "a" : "button"}
	role={href ? "link" : "button"}
	type={href ? undefined : type}
	href={href || undefined}
	on:click
	class={cn(
		"relative px-[1.25em] py-[0.5em] text-xl group/button font-semibold !leading-none uppercase bg-orange-500 text-white rounded-lg border-2 lg:hover:bg-transparent lg:hover:text-orange-500 border-orange-500 transition-colors",
		$$restProps.class ?? ""
	)}
>
	<span class="relative -top-px font-semibold"><slot /></span>
</svelte:element>
