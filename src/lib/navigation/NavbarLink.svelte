<script lang="ts">
	export let href: string;

	function scrollIntoView() {
		const el = document.querySelector(href);
		if (!el) return;
		el.scrollIntoView({
			behavior: "smooth"
		});
	}
</script>

<li class="relative group/link uppercase">
	<a {href} on:click|preventDefault={scrollIntoView}><slot /></a>
	<div
		class="absolute -bottom-2 inset-x-0 h-0.5 bg-gray mx-auto transition-all w-0 lg:group-hover/link:w-full ease-in-out duration-300"
	/>
</li>
