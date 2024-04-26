<script lang="ts" context="module">
	export const ssr = false;

	/* import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"; */
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	import "@splidejs/svelte-splide/css";

	import { SKILLS } from "$lib/util/constants";
	import Skill from "./Skill.svelte";
</script>

<Splide
	class="fade-mask w-full py-10 text-2xl"
	options={{
		drag: "free",
		focus: "center",
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
		<SplideSlide>
			<Skill {skill} />
		</SplideSlide>
	{/each}
</Splide>
