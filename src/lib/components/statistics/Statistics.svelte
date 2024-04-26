<script lang="ts">
	import { EXPERIENCE, PROJECTS } from "$lib/util/constants";
	import Box from "../Box.svelte";
	import Statistic from "./Statistic.svelte";

	const calculateYearsApart = (date1: Date, date2: Date): number =>
		date2.getFullYear() - date1.getFullYear();

	const yearsOfExperience = calculateYearsApart(new Date(EXPERIENCE[0].startDate), new Date());
	const projectLength = PROJECTS.length;
</script>

<section class="grid auto-cols-fr grid-flow-col gap-4">
	<h2 class="sr-only">Statistics</h2>
	<Statistic title="Years of Experience">
		{yearsOfExperience}
	</Statistic>
	<Statistic title="Projects Developed">
		{projectLength}
	</Statistic>
</section>
