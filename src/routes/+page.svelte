<script>
	import Section from "$lib/Section.svelte";
	import SocialLink from "$lib/SocialLink.svelte";
	import ToTop from "$lib/navigation/ToTop.svelte";
	import Filters from "$lib/showcase/Filters.svelte";
	import { Socials } from "../util/constants";
</script>

<ToTop />
<div
	class="min-h-[calc(100vh-theme(spacing.navbar)-theme(spacing.page))] pb-navbar flex flex-col justify-center gap-4"
>
	<div class="flex items-center justify-between h-full">
		<h1 class="text-7xl xl:text-8xl font-bold uppercase flex flex-col gap-6">
			<a href="#web" class="inline lg:hover:text-orange">Fullstack<br />web dev<br /></a>
			<a href="#photography" class="inline-block lg:hover:text-orange">& photo-<br />grapher</a>
		</h1>
		<img
			src="/images/me.jpg"
			alt="Me myself and I"
			class="rounded-3xl w-[min(theme(spacing.96),33vw)] max-md:hidden"
		/>
	</div>
	<div class="flex gap-4">
		<SocialLink social={Socials.GITHUB} />
		<SocialLink social={Socials.LINKEDIN} />
	</div>
</div>
<Section title="Showcase" id="showcase">
	<Filters />
</Section>
