<script>
	import ReadMore from "$lib/components/ReadMore.svelte";
	import Section from "$lib/components/Section.svelte";
	import Node from "$lib/components/experience/Node.svelte";
	import ToTop from "$lib/components/navigation/ToTop.svelte";
	import Project from "$lib/components/project/Project.svelte";
	import SkillScroll from "$lib/components/skills/SkillScroll.svelte";
	import SocialLink from "$lib/components/socials/SocialLink.svelte";
	import { EXPERIENCE, PROJECTS, Socials } from "../lib/util/constants";
</script>

<ToTop />
<!-- <PointerFollower /> -->
<div
	id="top"
	class="min-h-[calc(100vh-theme(spacing.navbar)-theme(spacing.page))] relative pb-navbar flex flex-col items-center justify-center gap-8 text-center"
>
	<div>
		<h2 class="text-2xl font-extralight text-gray-400">Fullstack web developer</h2>
		<h1 class="text-6xl xl:text-7xl font-bold uppercase gap-6 !leading-none">Oliver Rindholt</h1>
	</div>
	<div class="flex gap-4">
		<SocialLink social={Socials.GITHUB} />
		<SocialLink social={Socials.LINKEDIN} />
		<SocialLink social={Socials.STACKOVERFLOW} />
	</div>
	<SkillScroll />
	<!-- <ScrollDown /> -->
</div>
<Section title="Showcase" id="showcase">
	<ul class="space-y-6">
		{#each PROJECTS as project}
			<Project {project} />
		{/each}
	</ul>
</Section>
<Section title="Experience" id="experience">
	<ul class="space-y-6">
		{#each EXPERIENCE.toSorted((a, b) => +b.startDate - +a.startDate) as node, i}
			<Node {node} />
		{/each}
	</ul>
</Section>
<Section title="About me" id="bio" sr class="space-y-4 text-center">
	<h3 class="font-bold text-4xl normal-case">
		<span
			class="inline-block animate-wave origin-bottom-right will-change-transform relative -top-1"
			>👋</span
		> Hello! I'm Oliver
	</h3>
	<p>
		With over two years of hands-on knowledge gained through studying web development in my free
		time and at Roskilde Technical School, I take pride in writing clean, appealing, and reusable
		code that's easy for anyone (including your grandmother) to understand.
	</p>
	<p>
		Although I might be a junior in the job market, my ability to collaborate shines. I've
		successfully worked with graphic designers, managers, product owners, and fellow programmers on
		various web applications.
	</p>
	<p>
		I excel in learning new technologies and languages, documenting processes, and building
		responsive frontend solutions by interacting with the backend through APIs and databases. I have
		a focus on modern technology, but I'm adept at seamlessly integrating and adapting to older and
		preexisting tech environments.
	</p>
	<p>
		Described by classmates, coworkers, and myself as a <b>team player</b>, <b>trusted ally</b>, and
		<b>quick learner</b>.
	</p>
	<ReadMore>
		<h3 class="font-semibold text-center text-xl my-4">Interesting things about me</h3>
		<ul class="list-disc">
			<li class="space-y-4">
				<p>
					I also make electronic music on the down-low. My go-to for music magic is Ableton. I play
					around with synths, drum beats, and cool effects to shape my sound. feel free to check out
					the stuff I put together on my <a
						class="text-orange-500 lg:hover:text-opacity-80 transition-colors"
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
	</ReadMore>
</Section>
