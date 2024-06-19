<script lang="ts">
	import { dateString } from "$lib/util/helpers";
	import type { PageData } from "../../../routes/$types";
	import type { EXPERIENCE } from "../../util/constants";
	import Card from "../ui/Card.svelte";
	import ViewportFade from "../ui/ViewportFade.svelte";
	import ReferrerArrow from "../socials/ReferrerArrow.svelte";

	export let data: (typeof EXPERIENCE)[number];
	export let language: PageData["language"];
</script>

<ViewportFade as="li">
	<Card
		class="md:group-even/exp:col-start-1 md:group-even/exp:col-end-2 col-start-3 col-end-4 row-start-1 row-end-2 flex flex-col justify-between h-full space-y-4"
	>
		<h3
			class="font-semibold normal-case text-base flex sm:items-center gap-x-2 flex-wrap max-sm:flex-col"
		>
			<span>{data.title}</span>
			<span class="text-gray-500 max-sm:hidden">&#x2022;</span>
			<a
				target="_blank"
				href={data.companyLink}
				class="font-normal text-primary-500 md:hover:opacity-50 transition-opacity group/ref relative inline-block"
			>
				{data.company}
				<ReferrerArrow size={10} />
			</a>
		</h3>
		<p class="text-sm text-gray-300">{data.description}</p>
		<p class="font-medium text-sm text-primary-500">
			{dateString(data.startDate, language)} - {data.endDate
				? dateString(data.endDate, language)
				: "Right now"}
		</p>
	</Card>
</ViewportFade>
