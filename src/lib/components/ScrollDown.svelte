<script lang="ts">
	import { quintOut } from "svelte/easing";
	import { fade, fly } from "svelte/transition";

	let shown = true;

	function scroll() {
		if (window.scrollY > 0) {
			shown = false;
		} else {
			shown = true;
		}
	}
</script>

<svelte:window on:scroll={scroll} />

{#if shown}
	<div class="fixed bottom-4 flex justify-center" transition:fade>
		<svg
			width="30"
			height="100%"
			viewBox="0 0 247 390"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			fill-rule="evenodd"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-miterlimit="1.5"
		>
			<path
				id="wheel"
				d="M123.359,79.775l0,72.843"
				stroke="currentColor"
				stroke-width="20"
				fill="none"
			/>
			<path
				id="mouse"
				d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
				stroke="currentColor"
				stroke-width="20"
				fill="none"
			/>
		</svg>
	</div>
{/if}

<style>
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes scroll {
		0%,
		75%,
		100% {
			transform: translateY(0);
		}
		30% {
			transform: translateY(20%);
		}
	}

	svg {
		opacity: 0;
		animation: fade-in ease 1.5s 2s forwards;
	}

	svg #wheel {
		animation: scroll ease 2s infinite;
	}
</style>
