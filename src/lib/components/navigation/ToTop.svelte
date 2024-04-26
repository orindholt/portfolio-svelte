<script lang="ts">
	import { draw } from "svelte/transition";

	const duration = 500;
	let y: number = 0;

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
</script>

<svelte:window bind:scrollY={y} />

{#if y > 50}
	<button
		type="button"
		class="fixed bottom-[calc(theme(spacing.page)/2)] right-[calc(theme(spacing.page)/2)] md:bottom-page md:right-page lg:hover:scale-105 lg:active:scale-100 transition-transform text-orange-500 z-50"
		on:click={scrollToTop}
	>
		<svg
			width="50"
			height="50"
			viewBox="0 0 105 105"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				transition:draw={{ duration }}
				d="M52.4167 102.417C80.0317 102.417 102.417 80.0316 102.417 52.4166C102.417 24.8016 80.0317 2.41663 52.4167 2.41663C24.8017 2.41663 2.41669 24.8016 2.41669 52.4166C2.41669 80.0316 24.8017 102.417 52.4167 102.417Z"
				stroke="currentColor"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				transition:draw={{ duration }}
				d="M72.4167 62.4167L52.4167 42.4167L32.4167 62.4167"
				stroke="currentColor"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
{/if}
