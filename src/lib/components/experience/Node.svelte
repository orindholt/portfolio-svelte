<script lang="ts">
	import viewport from "$lib/actions/useViewportAction";
	import type { EXPERIENCE } from "../../util/constants";
	import ReferrerArrow from "../socials/ReferrerArrow.svelte";

	export let node: (typeof EXPERIENCE)[number];
	let isInViewport: boolean = false;

	const formateDate = (date: Date) =>
		date.toLocaleDateString("en-GB", {
			year: "numeric",
			month: "short"
		});
</script>

<li
	class="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center group/exp md:even:text-right gap-x-4 h-32 md:h-36"
	use:viewport
	on:viewportEnter={() => (isInViewport = true)}
	on:viewportExit={() => (isInViewport = false)}
>
	<div
		aria-hidden
		class="col-start-2 col-end-3 row-start-1 row-end-2 w-8 h-8 bg-black rounded-full"
	/>
	<div
		class="md:group-even/exp:col-start-1 md:group-even/exp:col-end-2 col-start-3 col-end-4 row-start-1 row-end-2 transition-all duration-700 ease-in-out flex flex-col justify-between h-full"
		style="opacity: {isInViewport ? 1 : 0}; transform: translateY(-{isInViewport ? 0 : 50}px);"
	>
		<h3 class="font-semibold normal-case text-base text-black">
			{node.title} &#x2022;
			<a
				target="_blank"
				href={node.companyLink}
				class="font-normal text-orange lg:hover:!text-opacity-50 transition-colors group/ref relative inline-block"
			>
				{node.company}
				<ReferrerArrow size={10} />
			</a>
		</h3>
		<p class="max-md:text-xs max-lg:text-sm">{node.description}</p>
		<p class="font-medium text-sm text-orange">
			{formateDate(node.startDate)} - {node.endDate ? formateDate(node.endDate) : "Right now"}
		</p>
	</div>
</li>
