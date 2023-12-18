<script lang="ts">
	export let href: string;

	import { createEventDispatcher } from "svelte";

	let dispatch = createEventDispatcher();

	function handleClick() {
		// Dispatch a custom event named "foo" with some data
		dispatch("navigation", { message: "Custom event triggered!" });
	}

	function scrollIntoView() {
		const el = document.querySelector(href);
		if (!el) return;
		handleClick();
		el.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
	}
</script>

<li class="relative group/link uppercase">
	<a {href} on:click|preventDefault={scrollIntoView} class="h-full block"><slot /></a>
	<div
		class="absolute -bottom-2 inset-x-0 h-0.5 bg-gray mx-auto transition-all w-0 lg:group-hover/link:w-full ease-in-out duration-300"
	/>
</li>
