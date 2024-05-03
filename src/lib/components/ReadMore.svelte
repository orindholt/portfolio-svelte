<script lang="ts">
	import accordion from "$lib/actions/useAccordion";
	import Button from "./Button.svelte";

	export let toggled: boolean = false;

	function toggle() {
		toggled = !toggled;
	}
	$: text = toggled ? "Collapse" : "Expand";
</script>

<div class="flex flex-col gap-4">
	<div use:accordion={toggled}>
		<slot />
	</div>
	<Button name="{text}" class="mx-auto" on:click={toggle}>
		{text}
	</Button>
</div>
