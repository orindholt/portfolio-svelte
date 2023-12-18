<script lang="ts">
	import accordion from "$lib/actions/useAccordion";
	import Button from "./Button.svelte";

	export let toggled: boolean = false;

	function toggle() {
		toggled = !toggled;
	}
</script>

<div class="flex flex-col gap-4">
	<div use:accordion={toggled}>
		<slot />
	</div>
	<Button class="mx-auto" on:click={toggle}>
		{!toggled ? "Read More" : "Read Less"}
	</Button>
</div>
