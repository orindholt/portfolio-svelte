<script lang="ts">
	type InputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search";

	export let placeholder: string = "...";
	export let required: boolean = false;
	export let type: InputType = "text";
	export let label: string;
	export let name: string;
</script>

<div class="flex flex-col gap-0.5 md:gap-2 {$$restProps.class ?? ''}">
	<label class="text-gray-darker" for={name}>{label}</label>
	<input
		class="p-2 border-2 border-gray-normal focus:border-gray-dark bg-transparent outline-none transition-all placeholder:text-gray-dark text-black rounded-md"
		{type}
		id={name}
		{name}
		{required}
		{placeholder}
	/>
</div>
