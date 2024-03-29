<script>
	import ReadMore from "$lib/components/ReadMore.svelte";
	import ScrollDown from "$lib/components/ScrollDown.svelte";
	import Section from "$lib/components/Section.svelte";
	import Node from "$lib/components/experience/Node.svelte";
	import ToTop from "$lib/components/navigation/ToTop.svelte";
	import Project from "$lib/components/project/Project.svelte";
	import Skill from "$lib/components/skills/Skill.svelte";
	import SocialLink from "$lib/components/socials/SocialLink.svelte";
	import { CONTACT_EMAIL, EXPERIENCE, PROJECTS, SKILLS, Socials } from "../lib/util/constants";
</script>

<ToTop />
<!-- <PointerFollower /> -->
<div
	id="top"
	class="min-h-[calc(100vh-theme(spacing.navbar)-theme(spacing.page))] relative pb-navbar flex flex-col items-center justify-center gap-8 text-center"
>
	<div>
		<h2 class="text-2xl font-extralight text-black">Fullstack web developer</h2>
		<h1 class="text-6xl xl:text-7xl font-bold uppercase gap-6 !leading-none">Oliver Rindholt</h1>
	</div>
	<div class="flex gap-4">
		<SocialLink social={Socials.GITHUB} />
		<SocialLink social={Socials.LINKEDIN} />
		<SocialLink social={Socials.STACKOVERFLOW} />
	</div>
	<ScrollDown />
</div>
<Section title="Showcase" id="showcase">
	<ul class="grid grid-flow-row auto-rows-fr md:grid-cols-2 gap-4 py-2">
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
	<h3 class="font-bold text-center text-4xl text-black normal-case">
		<span class="inline-block animate-wave origin-bottom-right will-change-transform">👋</span> Hello!
		I'm Oliver
	</h3>
	<h4 class="text-xl text-center text-orange">
		Web Developer and CSS magician based in Copenhagen.
	</h4>
	<div class="flex gap-8 py-4">
		<p class="lg:flex-2">
			With over two years of hands-on knowledge gained through studying web development in my free
			time and at Roskilde Technical School, I take pride in writing clean, appealing, and reusable
			code that's easy for anyone (including your grandmother) to understand.<br /><br />

			Although I might be a junior in the job market, my ability to collaborate shines. I've
			successfully worked with graphic designers, managers, product owners, and fellow programmers
			on various web applications.<br /><br />

			I excel in learning new technologies and languages, documenting processes, and building
			responsive frontend solutions by interacting with the backend through APIs and databases. I
			have a focus on modern technology, but I'm adept at seamlessly integrating and adapting to
			older and preexisting tech environments.<br /><br />

			Described by classmates, coworkers, and myself as a team player, trusted ally, and quick
			learner.
		</p>
		<div class="flex-1 flex items-center max-lg:hidden">
			<img src="/images/me.jpg" alt="Me myself and I" class="rounded-3xl shadow-md" />
		</div>
	</div>
	<ReadMore>
		<h3 class="font-semibold text-center text-xl my-4">Interesting things about me</h3>
		<ul class="list-disc">
			<li class="space-y-4">
				<p>
					I also make electronic music on the down-low. My go-to for music magic is Ableton. I play
					around with synths, drum beats, and cool effects to shape my sound. Dive into my tunes and
					vibe with the beats, feel free to check out the stuff I put together on my <a
						class="text-orange lg:hover:text-opacity-80 transition-colors"
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
<Section title="Tools I work with" id="tools">
	<ul class="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
		{#each Object.entries(SKILLS) as [slug, skill]}
			<Skill {skill} {slug} />
		{/each}
	</ul>
</Section>
<Section title="Shoot me a message" class="flex flex-col items-center" id="chat">
	<!-- <form method="post" use:enhance class="grid grid-cols-2 gap-4">
		<h2 class="col-span-full text-center">How do I contact you?</h2>
		<Input label="Your email" type="email" name="email" required placeholder="Your email..." />
		<Input label="Your full- or first name" name="name" required placeholder="" />
		<h2 class="col-span-full text-center">What do I need to know?</h2>
		<Input label="Subject" name="subject" placeholder="Message subject..." />
		<Input label="Message" name="message" placeholder="Your message to me..." />
		<Button type="submit">Send</Button>
	</form> -->
	<h3 class="text-center">For now you can contact me on</h3>
	<a
		class="font-semibold lg:hover:text-orange transition-colors text-xl"
		href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a
	>
</Section>
