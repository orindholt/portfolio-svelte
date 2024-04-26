<script lang="ts">
	import { cn } from "$lib/util/functions";

	export let sr: boolean = false;
	export let title: string;
	export let id: string;
</script>

<section {id} class={cn("py-4 border-t-2 border-gray-900", $$restProps.class ?? "")}>
	<h2 class="text-xl mb-4 text-center font-lexend text-orange-500 {sr ? 'sr-only' : 'not-sr-only'}">
		{title}
	</h2>
	<slot />
</section>
