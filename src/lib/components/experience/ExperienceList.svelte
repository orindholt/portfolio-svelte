<script lang="ts">
	import { EXPERIENCE } from "$lib/util/constants";
	import type { PageData } from "../../../routes/$types";
	import Section from "../Section.svelte";
	import Experience from "./Experience.svelte";

	export let language: PageData["language"];
</script>

<Section title="Experience" id="experience">
	<ul class="space-y-6">
		{#each EXPERIENCE as data}
			<Experience {data} {language} />
		{/each}
	</ul>
</Section>
