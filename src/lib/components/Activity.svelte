<script lang="ts">
	import { Socials } from "$lib/util/constants";
	import CountUp from "./CountUp.svelte";
	import ToolTip from "./ToolTip.svelte";

	export let data: any;
</script>

<div class="w-full relative">
	<h3 class="text-3xl flex flex-col absolute top-0 inset-x-0">
		<span class="font-bold leading-none">
			<CountUp value={data.totalContributions} />
		</span>
		<span class="text-gray-600 text-sm">
			Total <a
				href={Socials.GITHUB}
				target="_blank"
				class="lg:hover:text-orange-500 transition-colors">Github</a
			> Contributions
		</span>
	</h3>
	<div class="overflow-x-auto overflow-y-hidden w-full pb-4 pt-16" style="direction: rtl;">
		<div class="grid grid-rows-7 grid-flow-col gap-1 w-fit" style="direction: ltr;">
			{#each data.weeks as week}
				{#each week.contributionDays as day}
					{@const count = day.contributionCount}
					{@const level = count >= 20 ? 4 : count >= 14 ? 3 : count >= 7 ? 2 : count > 0 ? 1 : 0}
					<ToolTip tip={count}>
						<div data-count={count} data-level={level} />
					</ToolTip>
				{/each}
			{/each}
		</div>
	</div>
</div>

<style>
	[data-level] {
		@apply size-4 rounded-sm;
	}
	[data-level="0"] {
		@apply bg-gray-900;
	}
	[data-level="1"] {
		@apply bg-orange-950;
	}
	[data-level="2"] {
		@apply bg-orange-800;
	}
	[data-level="3"] {
		@apply bg-orange-700;
	}
	[data-level="4"] {
		@apply bg-orange-500;
	}
</style>
