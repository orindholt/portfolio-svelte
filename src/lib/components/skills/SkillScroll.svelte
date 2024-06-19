<script lang="ts" context="module">
	export const ssr = false;

	/* import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"; */
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	import "@splidejs/svelte-splide/css";

	import { SKILLS } from "$lib/util/constants";
	import Skill from "./Skill.svelte";
</script>

<Splide
	label="Skills"
	class="fade-mask w-full py-10 text-2xl animate-fade-in"
	options={{
		drag: "free",
		focus: "center",
		snap: true,
		lazyLoad: true,
		updateOnMove: true,
		arrows: false,
		type: "loop",
		autoWidth: true,
		gap: "2rem",
		pagination: false
		/* autoScroll: {
			speed: 0.2,
			pauseOnHover: false
		} */
	}}
>
	{#each Object.values(SKILLS) as skill}
		<SplideSlide
			title={skill.name}
			class="size-14 transition-transform duration-500 ease-in-out will-change-transform"
			aria-label={skill.name}
		>
			<Skill {skill} />
		</SplideSlide>
	{/each}
</Splide>
