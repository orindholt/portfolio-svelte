<script lang="ts">
	import viewport from "$lib/actions/useViewportAction";
	import type { EXPERIENCE } from "../../util/constants";
	import Box from "../Box.svelte";
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
	use:viewport
	on:viewportEnter={() => (isInViewport = true)}
	on:viewportExit={() => (isInViewport = false)}
>
	<Box
		class="md:group-even/exp:col-start-1 md:group-even/exp:col-end-2 col-start-3 col-end-4 row-start-1 row-end-2 transition-all duration-700 ease-in-out flex flex-col justify-between h-full space-y-4"
		style="opacity: {isInViewport ? 1 : 0}; transform: translateY(-{isInViewport ? 0 : 50}px);"
	>
		<h3 class="font-semibold normal-case text-base">
			{node.title} &#x2022;
			<a
				target="_blank"
				href={node.companyLink}
				class="font-normal text-orange-500 lg:hover:opacity-50 transition-opacity group/ref relative inline-block"
			>
				{node.company}
				<ReferrerArrow size={10} />
			</a>
		</h3>
		<p class="text-sm text-gray-300">{node.description}</p>
		<p class="font-medium text-sm text-orange-500">
			{formateDate(node.startDate)} - {node.endDate ? formateDate(node.endDate) : "Right now"}
		</p>
	</Box>
</li>
