<script lang="ts">
	import { Socials } from "$lib/util/constants";
	import type { PageData } from "../../routes/$types";
	import CountUp from "./CountUp.svelte";
	import ToolTip from "./ToolTip.svelte";

	export let data: PageData["activityData"];
	export let language: PageData["language"];
	const days = data?.weeks.flatMap((week) => week.contributionDays);
</script>

{#if days?.length > 0}
	<div class="w-full relative">
		<h3 class="text-3xl flex flex-col absolute top-0 inset-x-0">
			<span class="font-bold leading-none">
				<CountUp value={data.totalContributions} />
			</span>
			<span class="text-gray-300 text-sm">
				<a href={Socials.GITHUB} target="_blank" class="lg:hover:text-orange-500 transition-colors"
					>Github</a
				> Contributions
			</span>
		</h3>
		<div class="overflow-x-auto overflow-y-hidden w-full pb-4 pt-16" style="direction: rtl;">
			<div class="grid grid-rows-7 grid-flow-col gap-1 w-fit" style="direction: ltr;">
				{#each days as day, i (i)}
					{@const count = day.contributionCount}
					{@const level = count >= 20 ? 4 : count >= 14 ? 3 : count >= 7 ? 2 : count > 0 ? 1 : 0}
					<ToolTip>
						<div slot="tip" class="text-xl font-bold">
							{#if language}
								<span class="text-xs text-gray-300 font-normal">
									{new Date(day.date).toLocaleDateString(language, {
										day: "numeric",
										month: "numeric",
										year: "2-digit"
									})}
								</span>
							{/if}
							{count}
						</div>
						<div data-count={count} data-level={level} />
					</ToolTip>
				{/each}
			</div>
		</div>
	</div>

	<style scoped>
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
{/if}
