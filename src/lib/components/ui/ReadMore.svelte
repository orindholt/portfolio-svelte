<script lang="ts">
	import accordion from "$lib/actions/useAccordion";
	import Minus from "phosphor-svelte/lib/Minus";
	import Plus from "phosphor-svelte/lib/Plus";
	import Button from "./Button.svelte";

	export let toggled: boolean = false;
	export let as: string = "div";

	function toggle() {
		toggled = !toggled;
	}
	$: text = !toggled ? "More" : "Less";
</script>

<svelte:element this={as} class={$$restProps.class}>
	<div use:accordion={toggled}>
		<slot />
	</div>
	<Button
		name={text}
		class="mx-auto flex items-center justify-center gap-1 transition-all px-0 w-28 {toggled
			? 'mt-6'
			: 'mt-0'}"
		on:click={toggle}
	>
		{#if toggled}
			<Minus size={32} />
		{:else}
			<Plus size={32} />
		{/if}
	</Button>
</svelte:element>
