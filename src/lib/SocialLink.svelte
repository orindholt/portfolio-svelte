<script lang="ts">
	import { Socials } from "../util/constants";

	export let social: Socials;
	export let size: number = 50;
</script>

<a href={social} class="lg:hover:text-orange" target="_blank">
	{#if social === Socials.GITHUB}
		<svg
			fill="none"
			height={size}
			width={size}
			shape-rendering="geometricPrecision"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			><path
				d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
			/></svg
		>
	{:else if social === Socials.LINKEDIN}
		<svg
			height={size}
			width={size}
			shape-rendering="geometricPrecision"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				stroke="currentColor"
				d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
			/><path fill="currentColor" stroke="currentColor" d="M2 9h4v12H2z" /><circle
				stroke="currentColor"
				fill="currentColor"
				cx="4"
				cy="4"
				r="2"
			/></svg
		>
	{/if}
</a>
