<script lang="ts">
	import viewport from "$lib/actions/useViewportAction";
	import ToolTip from "$lib/components/ui/ToolTip.svelte";
	import type { Project } from "$lib/util/types";
	import { IconCode, IconLink } from "@tabler/icons-svelte";
	import Card from "../ui/Card.svelte";
	import type { PageData } from "../../../routes/$types";
	import { dateString } from "$lib/util/helpers";
	import ViewportFade from "../ui/ViewportFade.svelte";

	export let project: Project;
	export let language: PageData["language"];
	let isInViewport: boolean = false;
</script>

<ViewportFade as="li">
	<Card class="flex flex-col gap-4 shadow-sm md:hover:shadow-md group/project h-full">
		<div class="flex items-center justify-between gap-3 flex-wrap">
			<h3 class="font-bold text-lg leading-none normal-case">{project.title}</h3>
			<ul class="flex flex-wrap gap-2">
				{#each project.tags as tag}
					<li style="color: {tag.standaloneColor};" class="group/tag">
						<ToolTip>
							<span slot="tip">{tag.name}</span>
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
		<div class="flex mt-auto gap-4">
			{#if project.startDate}
				<p class="font-medium text-sm text-primary-500">
					Started ~ {dateString(project.startDate, language)}
				</p>
			{/if}
			<div class="flex gap-2 ml-auto">
				{#if project.repo}
					<a
						aria-label="Project repository"
						href={project.repo}
						target="_blank"
						class="text-gray-300 md:hover:text-primary-500 transition-colors duration-300 ease-in-out"
					>
						<IconCode size={24} />
					</a>
				{/if}
				{#if project.link}
					<a
						aria-label="Project link"
						href={project.link}
						target="_blank"
						class="text-gray-300 md:hover:text-primary-500 transition-colors duration-300 ease-in-out"
					>
						<IconLink size={24} />
					</a>
				{/if}
			</div>
		</div>
	</Card>
</ViewportFade>
