<script lang="ts">
	export let href: string;

	import { createEventDispatcher } from "svelte";

	let dispatch = createEventDispatcher();

	function scrollIntoView() {
		const el = document.querySelector(href) as HTMLElement | null;
		if (!el) return;

		dispatch("navigation");

		const navElm = document.querySelector("nav");
		// extra 2 pixels to account for border
		const navHeight = navElm ? navElm.offsetHeight - 2 : 0;

		window.scrollTo({
			top: el.id === "top" ? 0 : Math.max(0, el.offsetTop - navHeight),
			behavior: "smooth"
		});
		/* el.scrollIntoView({
			behavior: "smooth",
			block: el.id === "top" ? "end" : "start"
		}); */
	}
</script>

<li class="relative group/link uppercase">
	<a {href} on:click|preventDefault={scrollIntoView} class="h-full block"><slot /></a>
	<div
		class="absolute -bottom-2 inset-x-0 h-0.5 bg-gray mx-auto transition-all w-0 lg:group-hover/link:w-full ease-in-out duration-300"
	/>
</li>
