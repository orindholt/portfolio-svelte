<script lang="ts">
	import { enhance } from "$app/forms";
	import { cn } from "$lib/util/functions";
	import { Confetti } from "svelte-confetti";

	type Method = "post" | "get";

	export let method: Method = "post";
	export let action: string = "";
	let submitted = false;

	function onSubmit() {
		submitted = true;
		setTimeout(() => (submitted = false), 2000);
	}
</script>

{#if submitted}
	<Confetti amount={100} xSpread={0.1} duration={2000} />
{/if}
<form
	{method}
	{action}
	on:submit={onSubmit}
	use:enhance
	class={cn("grid grid-cols-2 gap-4 md:max-w-[75%] w-full", $$restProps.class ?? "")}
>
	<slot />
</form>
