<script>
	import Box from "../Box.svelte";

	export let title = "";
</script>

<Box class="space-y-1">
	<h4 class="text-5xl font-bold" aria-labelledby={title}>
		<slot />
	</h4>
	<h3 class="text-sm" id={title}>{title}</h3>
</Box>
