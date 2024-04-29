<script lang="ts">
	import viewport from "$lib/actions/useViewportAction";
	import ToolTip from "$lib/components/ToolTip.svelte";
	import type { Project } from "$lib/util/types";
	import { IconCode, IconLink } from "@tabler/icons-svelte";
	import Box from "../Box.svelte";

	export let project: Project;
	let isInViewport: boolean = false;
</script>

<!-- TODO: Add dimmed logo as Box background -->
<!-- TODO: Add border hover effect -->
<li
	use:viewport
	on:viewportEnter={() => (isInViewport = true)}
	on:viewportExit={() => (isInViewport = false)}
>
	<Box
		style="opacity: {isInViewport ? 1 : 0}; transform: translateY(-{isInViewport ? 0 : 50}px);"
		class="flex flex-col gap-4 shadow-sm lg:hover:shadow-md lg:hover:bg-opacity-100 transition-all ease-in-out duration-700 group/project h-full"
	>
		<div class="flex items-center justify-between gap-3">
			<h3 class="font-bold text-lg leading-none normal-case">{project.title}</h3>
			<ul class="flex flex-wrap gap-2">
				{#each project.tags as tag}
					<li style="color: {tag.standaloneColor};" class="group/tag">
						<ToolTip tip={tag.name}>
							<svg
								class="text-white group-hover/tag:text-current transition-colors duration-300 ease-in-out"
								style="width: 1.5em; height: 1.5em;"
								viewBox={tag.svg.viewBox}
							>
								{#each Array.isArray(tag.svg.path) ? tag.svg.path : [tag.svg.path] as path}
									<path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d={path} />
								{/each}
							</svg>
						</ToolTip>
					</li>
				{/each}
			</ul>
		</div>
		<p class="text-gray-300 text-sm">{project.description}</p>
		<div class="flex gap-2 mt-auto justify-end">
			{#if project.repo}
				<a
					aria-label="Project repository"
					href={project.repo}
					target="_blank"
					class="text-gray-300 lg:hover:text-orange-500 transition-colors duration-300 ease-in-out"
				>
					<IconCode size={24} />
				</a>
			{/if}
			{#if project.link}
				<a
					aria-label="Project link"
					href={project.link}
					target="_blank"
					class="text-gray-300 lg:hover:text-orange-500 transition-colors duration-300 ease-in-out"
				>
					<IconLink size={24} />
				</a>
			{/if}
		</div>
	</Box>
</li>
