<script lang="ts">
	import { twMerge } from "tailwind-merge";
	export let size: number = 25;

	$: maxedSize = Math.max(size, 16);
	$: strokeWidth = Math.max(Math.floor(size / 16), 2);
</script>

<svg
	class={twMerge(
		"lg:group-hover/ref:translate-x-1/4 lg:group-hover/ref:-translate-y-1/4 lg:group-hover/ref:opacity-100 opacity-0 transition-all absolute top-full left-full block",
		$$restProps.class ?? ""
	)}
	fill="none"
	shape-rendering="geometricPrecision"
	stroke="currentColor"
	stroke-linecap="round"
	stroke-linejoin="round"
	stroke-width={strokeWidth}
	viewBox="0 0 24 24"
	height={maxedSize}
	width={maxedSize}
>
	<path d="M7 17L17 7" />
	<path d="M7 7h10v10" />
</svg>
