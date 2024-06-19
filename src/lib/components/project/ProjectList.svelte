<script lang="ts">
	import { PROJECTS } from "$lib/util/constants";
	import type { PageData } from "../../../routes/$types";
	import ReadMore from "../ui/ReadMore.svelte";
	import Section from "../ui/Section.svelte";
	import Project from "./Project.svelte";

	export let language: PageData["language"];
	let sliceThreshold = 4;
</script>

<Section title="Featured" id="featured" class="space-y-3">
	<ul class="space-y-6">
		{#each PROJECTS.slice(0, sliceThreshold) as project}
			<Project {project} {language} />
		{/each}
	</ul>
	<ReadMore as="ul" class="!mt-6">
		{#each PROJECTS.slice(sliceThreshold) as project}
			<Project {project} {language} />
		{/each}
	</ReadMore>
</Section>
