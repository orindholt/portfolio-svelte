<script lang="ts">
	export let title: string;
	export let id: string;
</script>

<section {id} class="py-[calc(theme(spacing.page)/2)] border-t-2 border-gray">
	<h2 class="uppercase text-gray text-2xl font-semibold">{title}</h2>
	<slot />
</section>
