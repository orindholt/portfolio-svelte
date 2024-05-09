<script lang="ts">
	import Activity from "$lib/components/Activity.svelte";
	import Section from "$lib/components/Section.svelte";
	import ExperienceList from "$lib/components/experience/ExperienceList.svelte";
	import ToTop from "$lib/components/navigation/ToTop.svelte";
	import ProjectList from "$lib/components/project/ProjectList.svelte";
	import SkillScroll from "$lib/components/skills/SkillScroll.svelte";
	import SocialLink from "$lib/components/socials/SocialLink.svelte";
	import ThemeSelector from "$lib/components/theme/ThemeSelector.svelte";
	import { EXPERIENCE, Socials } from "../lib/util/constants";
	import type { PageData } from "./$types";

	export let data: PageData;

	EXPERIENCE.sort((a, b) => +b.startDate - +a.startDate);
</script>

<ToTop />
<!-- <PointerFollower /> -->
<div
	id="top"
	class="min-h-[calc(100vh-theme(spacing.navbar)-theme(spacing.page)/2)] md:min-h-[calc(100vh-theme(spacing.navbar)-theme(spacing.page))] relative pb-navbar flex flex-col items-center justify-center gap-8 text-center animate-fade-in"
>
	<div class="flex flex-col-reverse md:flex-col">
		<ThemeSelector />
		<h2 class="text-xl sm:text-2xl font-extralight text-gray-300">Fullstack web developer</h2>
		<h1 class="text-5xl sm:text-6xl xl:text-7xl font-bold uppercase gap-6 !leading-none">
			Oliver Rindholt<span class="sr-only">- Portfolio</span>
		</h1>
	</div>
	<div class="flex gap-4">
		<SocialLink social={Socials.GITHUB} />
		<SocialLink social={Socials.LINKEDIN} />
		<SocialLink social={Socials.STACKOVERFLOW} />
	</div>
	<Activity data={data.activityData} language={data.language} />
	<!-- <ScrollDown /> -->
</div>
<ProjectList language={data.language} />
<ExperienceList language={data.language} />
<Section title="About" id="bio" class="space-y-4 text-center">
	<h3 class="font-bold text-4xl normal-case">
		<span
			class="inline-block animate-wave origin-bottom-right will-change-transform relative -top-1"
		>
			👋
		</span>
		Hello!<br />
	</h3>
	<p>
		I take pride in writing clean, readable, and reusable code that's easy to interpret and scale.
	</p>
	<p>
		I excel in learning new technologies and languages, documenting development processes, and
		building responsive fullstack solutions. My focus area is on modern tech-stacks, but I'm adept
		at seamlessly integrating and adapting to older and legacy tech environments.
	</p>
	<p>
		Described by classmates, coworkers, and myself as a <b>team player</b>, <b>trusted ally</b>, and
		<b>quick learner</b>.
	</p>
	<SkillScroll />
	<!-- TODO: Add instagram feed -->
	<!-- <ReadMore>
		<h3 class="font-semibold text-center text-xl my-4">Interesting things about me</h3>
		<ul class="list-disc">
			<li class="space-y-4">
				<p>
					I also make electronic music on the down-low. My go-to for music magic is Ableton. I play
					around with synths, drum beats, and cool effects to shape my sound. feel free to check out
					the stuff I put together on my <a
						class="text-primary-500 lg:hover:text-opacity-80 transition-colors"
						href="https://soundcloud.com/oliver-rindholt"
						target="_blank">SoundCloud</a
					>!
				</p>
				<iframe
					title="Otherworldly Bouquets"
					width="100%"
					height="150"
					scrolling="no"
					frameborder="no"
					allow="autoplay"
					src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1434511585&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
				/>
			</li>
		</ul>
	</ReadMore> -->
</Section>
