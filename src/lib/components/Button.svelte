<script lang="ts">
	import { twMerge } from "tailwind-merge";
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
	class={twMerge(
		"relative px-4 py-2 text-2xl group/button backing font-medium !leading-none uppercase",
		$$restProps.class ?? ""
	)}
>
	<span
		class="inline-block relative z-[1] lg:group-hover/button:-translate-x-1 lg:group-hover/button:-translate-y-1 will-change-transform"
	>
		<slot />
	</span>
</svelte:element>
