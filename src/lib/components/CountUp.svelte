<script lang="ts">
	export const ssr = false;
	// @ts-ignore
	import Countup from "svelte-countup";

	export let value: number;
	export let duration: number = 500;
</script>

<Countup initial={0} {value} {duration} />
