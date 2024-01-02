<script lang="ts">
	import { hexToRgb, shadeColor } from "$lib/util/functions";
	import type { Skill } from "$lib/util/types";

	export let skill: Skill;

	const isGradient = Array.isArray(skill.logoColor);
</script>

<li
	aria-label={skill.name}
	class="text-sm text-white rounded-lg lg:hover:opacity-90 lg:hover:scale-105 transition-all sm:shadow-md lg:hover:shadow-lg ease-in-out duration-300"
	style="background: linear-gradient(to top right, {shadeColor(
		skill.backgroundColor,
		-10
	)}, {skill.backgroundColor}, {shadeColor(skill.backgroundColor, 10)});"
>
	<a href="#showcase?tag={skill.slug}" class="w-full h-14 flex gap-2 justify-center items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={skill.svg.viewBox}
			style="width: {skill.name ? '2em' : '3em'}; height: {skill.name ? '2em' : '3em'};"
		>
			{#if isGradient}
				<defs>
					<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
						{#each skill.logoColor as color, i}
							<stop
								offset="{(i * 100) / skill.logoColor.length}%"
								style="stop-color: {hexToRgb(color, true)}; stop-opacity:1"
							/>
						{/each}
					</linearGradient>
				</defs>
			{/if}
			{#each Array.isArray(skill.svg.path) ? skill.svg.path : [skill.svg.path] as path}
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					fill={Array.isArray(skill.logoColor) ? "url(#grad)" : skill.logoColor}
					d={path}
				/>
			{/each}
		</svg>
		{#if skill.name}
			<h4
				class="text-[1.5em] leading-none font-semibold font-lexend max-sm:hidden normal-case"
				style="color: {skill.textColor ?? (isGradient ? skill.logoColor.at(-1) : skill.logoColor)}"
			>
				{skill.name}
			</h4>
		{/if}
	</a>
</li>
