<script lang="ts">
	import { cn } from "$lib/util/helpers";
</script>

<svg
	class={cn("size-[1em] text-white", $$restProps.class)}
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill="currentColor"
		class="spinner"
		d="M2,12A10.94,10.94,0,0,1,5,4.65c-.21-.19-.42-.36-.62-.55h0A11,11,0,0,0,12,23c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"
	/>
</svg>

<style scoped>
	.spinner {
		transform-origin: center;
		animation: spinner_xeMo 0.6s linear infinite;
	}
	@keyframes spinner_xeMo {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
