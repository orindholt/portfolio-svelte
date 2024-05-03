<script lang="ts">
	import { cn } from "$lib/util/helpers";

	export let sr: boolean = false;
	export let title: string;
	export let id: string;
</script>

<section {id} class={cn("py-8 border-t-2 border-gray-900", $$restProps.class ?? "")}>
	<h2 class="text-xl mb-8 text-center text-orange-500 font-light {sr ? 'sr-only' : 'not-sr-only'}">
		{title}
	</h2>
	<slot />
</section>
