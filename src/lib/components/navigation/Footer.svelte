<script>
	import SocialLink from "$lib/components/socials/SocialLink.svelte";
	import { CONTACT_EMAIL, Socials } from "../../util/constants";
</script>

<footer class="flex flex-wrap items-center justify-between max-w-6xl w-full mx-auto p-6 gap-4">
	<ul class="flex gap-4">
		<li>
			<SocialLink size={28} social={Socials.GITHUB} />
		</li>
		<li>
			<SocialLink size={28} social={Socials.LINKEDIN} />
		</li>
		<li>
			<SocialLink size={28} social={Socials.STACKOVERFLOW} />
		</li>
	</ul>
	<a
		class="font-semibold md:hover:text-primary-500 transition-colors"
		href="mailto:{CONTACT_EMAIL}"
	>
		{CONTACT_EMAIL}
	</a>
</footer>
