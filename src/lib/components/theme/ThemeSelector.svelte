<script lang="ts">
	import type { Theme } from "$lib/util/types";
	import { onMount } from "svelte";
	import { draw } from "svelte/transition";
	import { THEMES } from "../../util/constants";

	const duration = 500;
	let mounted = false;
	let currentTheme = THEMES.orange;

	function onThemeChange(theme: Theme) {
		const themeVariables = Object.entries(theme)
			.map(([key, value]) => `--primary-${key}:${value}`)
			.join(";");
		currentTheme = theme;
		document.body.style.cssText = themeVariables;
	}

	onMount(() => {
		mounted = true;

		const storedTheme = localStorage.getItem("theme");
		let theme = currentTheme;

		if (storedTheme) {
			const foundTheme = Object.entries(THEMES).find(([key]) => key === storedTheme);
			if (foundTheme) {
				theme = foundTheme[1];
			}
		}
		onThemeChange(theme);
	});
</script>

<div class="flex gap-3 md:gap-4 justify-center md:pb-12 max-md:absolute top-6 left-6 max-md:z-50">
	{#each Object.entries(THEMES) as [key, theme]}
		{@const selected = currentTheme === theme}
		<button
			disabled={selected}
			aria-label="Change theme to {key}"
			class="size-8 md:size-10 p-1.5 rounded-full md:hover:opacity-100 opacity-50 md:hover:scale-105 transition-all relative"
			style="background: linear-gradient(145deg, {theme['600']}, {theme['500']}, {theme[
				'400'
			]}); {selected ? 'opacity: 1 !important; transform: scale(1) !important;' : ''}"
			on:click={() => {
				localStorage.setItem("theme", key);
				onThemeChange(theme);
			}}
		>
			{#if selected && mounted}
				<svg
					class="absolute pointer-events-none inset-0 scale-125 origin-center"
					viewBox="0 0 105 105"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						transition:draw={{ duration }}
						d="M52.4167 102.417C80.0317 102.417 102.417 80.0316 102.417 52.4166C102.417 24.8016 80.0317 2.41663 52.4167 2.41663C24.8017 2.41663 2.41669 24.8016 2.41669 52.4166C2.41669 80.0316 24.8017 102.417 52.4167 102.417Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/if}
		</button>
	{/each}
</div>
