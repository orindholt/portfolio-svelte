<script lang="ts">
	/* Temp data */
	const sections = [
		{
			title: "Web",
			id: "web",
			count: 20
		},
		{
			title: "Photo",
			id: "photography",
			count: 20
		},
		{
			title: "Drafts",
			id: "drafts",
			count: 20
		},
		{
			title: "Games",
			id: "games",
			count: 20
		}
	];
</script>

<ul class="flex flex-wrap items-center">
	{#each sections as section}
		<li>
			<button type="button" class="flex text-6xl font-light uppercase">
				<span>{section.title}</span>
				<span class="text-xs">{section.count}</span>
				<span class="text-gray px-8 inline-block">/</span>
			</button>
		</li>
	{/each}
</ul>
