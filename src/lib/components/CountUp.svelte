<script lang="ts">
	export const ssr = false;
	// @ts-expect-error: No types available
	import Countup from "svelte-countup";

	export let value: number;
	export let duration: number = 2000;
</script>

<Countup initial={0} {value} {duration} />
