<script lang="ts">
	import { Socials } from "$lib/util/constants";
	import { IconBrandGithub, IconBrandLinkedin, IconBrandStackoverflow } from "@tabler/icons-svelte";
	import ReferrerArrow from "./ReferrerArrow.svelte";

	export let social: Socials;
	export let size: number = 35;

	$: arrowSize = Math.floor(size / 2);
</script>

<a
	href={social}
	class="lg:hover:text-orange-500 transition-colors duration-300 ease-in-out group/ref relative block"
	target="_blank"
	rel="noreferrer"
>
	<ReferrerArrow class="left-3/4" size={arrowSize} />
	{#if social === Socials.GITHUB}
		<IconBrandGithub size={32} />
	{:else if social === Socials.LINKEDIN}
		<IconBrandLinkedin size={32} />
	{:else if social === Socials.STACKOVERFLOW}
		<IconBrandStackoverflow size={32} />
	{/if}
</a>
