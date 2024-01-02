<script lang="ts">
	import { twMerge } from "tailwind-merge";

	export let title: string;
	export let id: string;
</script>

<section {id} class={twMerge("py-6 border-t-2 border-gray", $$restProps.class ?? "")}>
	<h2 class="text-2xl mb-4 text-center">{title}</h2>
	<slot />
</section>
