<script lang="ts">
	type InputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search";

	export let placeholder: string = "...";
	export let required: boolean = false;
	export let type: InputType = "text";
	export let label: string;
	export let name: string;
</script>

<div class="flex flex-col gap-2 {$$restProps.class ?? ''}">
	<label class="text-black" for={name}>{label}</label>
	<input
		class="bg-black focus:bg-orange focus:outline-none transition-colors placeholder:text-gray text-white p-2 rounded-sm"
		{type}
		id={name}
		{name}
		{required}
		{placeholder}
	/>
</div>
