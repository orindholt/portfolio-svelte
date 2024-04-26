<script lang="ts">
	import type { Skill } from "$lib/util/types";

	export let skill: Skill;
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox={skill.svg.viewBox} width="2em" height="2em">
	{#each Array.isArray(skill.svg.path) ? skill.svg.path : [skill.svg.path] as path}
		<path fill-rule="evenodd" clip-rule="evenodd" fill="white" d={path} />
	{/each}
</svg>
