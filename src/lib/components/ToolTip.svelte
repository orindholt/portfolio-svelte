<script lang="ts">
	import { cn } from "$lib/util/functions";

	export let tip: string = "";
</script>

<div class={cn("relative group/tip", $$restProps.class ?? "")}>
	<slot />
	<div
		class="absolute top-full left-1/2 -translate-x-1/2 mx-auto w-fit pt-1 lg:group-hover/tip:opacity-100 opacity-0 lg:group-hover/tip:translate-y-0 -translate-y-1.5 transition-all duration-300 ease-in-out pointer-events-none"
	>
		<svg
			class="text-black relative -bottom-px mx-auto"
			width="20"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 25.99 14.6"
		>
			<path
				fill="currentColor"
				d="m10.78,1.01L.82,15.42l22.36-.04L13.25,1.01c-.5-.72-1.97-.72-2.47,0Z"
			/>
			<path
				fill="currentColor"
				d="m13.99.99c-.43-.62-1.18-.99-2.01-.99s-1.58.37-2.01.99L0,15.42h1.22S10.8,1.56,10.8,1.56c.48-.69,1.89-.69,2.37,0l9.56,13.82h1.21S13.99.99,13.99.99Z"
			/>
		</svg>
		{#if tip}
			<div class="bg-black rounded-md py-2 px-4 text-white">
				{tip}
			</div>
		{/if}
	</div>
</div>
