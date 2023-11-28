<script>
	import Section from "$lib/Section.svelte";
	import ToTop from "$lib/navigation/ToTop.svelte";
	import Filters from "$lib/showcase/Filters.svelte";
</script>

<ToTop />
<div
	class="flex items-center justify-between min-h-[calc(100vh-theme(spacing.navbar)-theme(spacing.page))] pb-navbar"
>
	<h1 class="text-8xl font-bold uppercase">Fullstack<br />dev<br />& photo-<br />grapher</h1>
	<img src="/images/me.jpg" alt="Me myself and I" class="rounded-3xl w-1/3" />
</div>
<Section title="Showcase" id="showcase">
	<Filters />
</Section>
