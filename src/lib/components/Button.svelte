<script lang="ts">
	import { cn } from "$lib/util/helpers";
	import type { ButtonType } from "$lib/util/types";

	export let type: ButtonType = "button";
	export let name: string;
	export let href: string = "";
</script>

<svelte:element
	this={href ? "a" : "button"}
	role={href ? "link" : "button"}
	type={href ? undefined : type}
	{href}
	aria-label={name}
	on:click
	{...$$restProps}
	class={cn(
		"relative px-[1.25em] py-[0.5em] text-base group/button font-semibold !leading-none uppercase bg-primary-500 text-white rounded-md border-2 lg:hover:bg-transparent lg:hover:text-primary-500 border-primary-500 transition-colors",
		$$restProps.class ?? ""
	)}
>
	<slot />
</svelte:element>
