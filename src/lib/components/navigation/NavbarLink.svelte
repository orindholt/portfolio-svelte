<script lang="ts">
	import { cn } from "$lib/util/helpers";

	export let href: string;

	import { createEventDispatcher } from "svelte";

	let dispatch = createEventDispatcher();

	function scrollIntoView() {
		const el = document.querySelector(href) as HTMLElement | null;
		if (!el) return;

		dispatch("navigation");

		const navElm = document.querySelector("nav");
		// extra 2 pixels to account for border
		const navHeight = navElm && window.innerWidth > 768 ? navElm.offsetHeight - 2 : 0;

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

<li class={cn("relative group/link uppercase md:flex-1", $$restProps.class)}>
	<a
		{href}
		{...$$restProps}
		on:click|preventDefault={scrollIntoView}
		class="w-full h-full md:hover:text-primary-500 transition-colors flex justify-center"
	>
		<slot />
	</a>
	<div
		class="absolute -bottom-2 inset-x-0 h-0.5 bg-gray-normal mx-auto transition-all w-0 md:group-hover/link:w-full ease-in-out duration-300"
	/>
</li>
