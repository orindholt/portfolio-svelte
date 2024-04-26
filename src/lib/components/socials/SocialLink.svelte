<script lang="ts">
	import { Socials } from "$lib/util/constants";
	import ReferrerArrow from "./ReferrerArrow.svelte";

	export let social: Socials;
	export let size: number = 35;

	$: arrowSize = Math.floor(size / 2);
</script>

<a
	href={social}
	class="lg:hover:text-orange-500 transition-colors duration-300 ease-in-out group/ref relative block"
	target="_blank"
	rel="noreferrer"
>
	<ReferrerArrow class="left-3/4" size={arrowSize} />
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
		>
			<path
				d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
			/>
		</svg>
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
		>
			<path
				fill="currentColor"
				stroke="currentColor"
				d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
			/>
			<path fill="currentColor" stroke="currentColor" d="M2 9h4v12H2z" />
			<circle stroke="currentColor" fill="currentColor" cx="4" cy="4" r="2" />
		</svg>
	{:else if social === Socials.STACKOVERFLOW}
		<svg
			width={size}
			height={size}
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M38.2081 43.0532V31.162H42.1548V46.9999H6.53235V31.162H10.479V43.0532H38.2081Z"
				fill="currentColor"
			/>
			<path
				d="M14.8358 30.0345L34.2103 34.0837L35.0303 30.1883L15.6558 26.1391L14.8358 30.0345ZM17.3985 20.8085L35.3379 29.1632L36.978 25.5753L19.0387 17.1694L17.3985 20.8085ZM22.3703 11.9926L37.5931 24.6527L40.1046 21.6286L24.8818 8.96857L22.3703 11.9926ZM32.2113 2.61292L29.0335 4.97066L40.8222 20.8598L44 18.5021L32.2113 2.61292ZM14.4257 39.0554H34.2103V35.1088H14.4257V39.0554Z"
				fill="currentColor"
			/>
		</svg>
	{/if}
</a>
