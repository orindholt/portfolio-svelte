<script>
	import ReadMore from "$lib/components/ReadMore.svelte";
	import Section from "$lib/components/Section.svelte";
	import Node from "$lib/components/experience/Node.svelte";
	import ToTop from "$lib/components/navigation/ToTop.svelte";
	import Project from "$lib/components/project/Project.svelte";
	import Skill from "$lib/components/skills/Skill.svelte";
	import SocialLink from "$lib/components/socials/SocialLink.svelte";
	import { EXPERIENCE, PROJECTS, SKILLS, Socials } from "../lib/util/constants";
</script>

<ToTop />
<div
	class="min-h-[calc(100vh-theme(spacing.navbar)-theme(spacing.page))] pb-navbar flex flex-col justify-evenly sm:justify-center gap-4"
>
	<div class="flex items-center justify-between h-full" id="top">
		<h1 class="text-5xl sm:text-6xl xl:text-7xl font-bold uppercase gap-6 !leading-tight">
			Fullstack Web-<br />
			developer
		</h1>
		<img
			src="/images/me.jpg"
			alt="Me myself and I"
			class="rounded-3xl w-[max(theme(spacing.56),33%)] max-md:hidden"
		/>
	</div>
	<div class="flex gap-4">
		<SocialLink social={Socials.GITHUB} />
		<SocialLink social={Socials.LINKEDIN} />
		<SocialLink social={Socials.STACKOVERFLOW} />
	</div>
</div>
<Section title="Showcase" id="showcase">
	<ul class="grid grid-flow-row md:grid-cols-2 gap-4 py-2">
		{#each PROJECTS as project}
			<Project {project} />
		{/each}
	</ul>
</Section>
<Section title="Experience" id="experience">
	<div class="relative">
		<div
			class="w-0.5 bg-black absolute left-8 md:inset-x-0 inset-y-[calc(theme(spacing.36)/2)] mx-auto"
		/>
		<ul class="space-y-10">
			{#each EXPERIENCE as node}
				<Node {node} />
			{/each}
		</ul>
	</div>
</Section>
<Section title="About me" id="bio" class="space-y-4">
	<h3 class="text-4xl font-bold text-center">
		<span class="text-4xl font-bold">👋<br class="sm:hidden" /> Hello! I'm Oliver</span>
	</h3>
	<h4 class="font-semibold text-center text-xl">
		a Junior Web Developer and CSS magician based in the outskirts of Copenhagen.
	</h4>
	<div class="space-y-4 leading-snug">
		<p>
			My daily routine involves crafting fullstack responsive web applications. With over 2 years of
			hands-on knowledge gained through studying web development in my free time and at Roskilde
			Technical School, I take pride in writing clean, appealing, and reusable code that's easy for
			anyone (including your grandmother) to understand.
		</p>
		<p>
			Although I might be a junior in the job market, my ability to collaborate shines. I've
			successfully worked with graphic designers, managers, product owners, and fellow programmers
			on various web applications.
		</p>
		<p>
			I excel in learning new technologies and languages, documenting processes, and building
			responsive frontend solutions by interacting with the backend through APIs and databases. I
			have a focus on modern technology, but adept at seamlessly integrating and adapting to older
			and preexisting tech environments.
		</p>
		<p>
			Apart from programming, I bring other skills to the board, with a few years of experience in
			photography and photo-editing using tools like Photoshop, Camera Raw, and Capture One.
			Additionally, I've dabbled in video-editing, producing YouTube content in the past.
		</p>
		<p>
			Described by classmates, coworkers, and myself as a team player, trusted ally, and quick
			learner.
		</p>
		<ReadMore>
			<h3 class="font-semibold text-center text-xl my-4">Interesting things about me</h3>
			<ul class="list-disc">
				<li class="space-y-4">
					<p>
						I also make electronic music. My go-to for music magic is Ableton Live. I play around
						with synths, drum beats, and cool effects to shape my sound. Starting from 2021, I use
						Ableton's arrangement view to piece everything together. Dive into my tunes and vibe
						with the beats, hope you enjoy the ride!
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
	</div>
</Section>
<Section title="Tools I use" id="tools">
	<ul class="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
		{#each SKILLS as skill, i}
			<Skill {skill} />
		{/each}
	</ul>
</Section>
