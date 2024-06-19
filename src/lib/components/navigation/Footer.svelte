<script>
	import SocialLink from "$lib/components/socials/SocialLink.svelte";
	import { CONTACT_EMAIL, Socials } from "../../util/constants";
</script>

<footer
	class="h-24 bg-gray-950/75 backdrop-blur-lg md:border max-lg:!border-x-0 border-b-0 border-gray-800 lg:rounded-t-md text-white flex flex-col items-center justify-between py-4 max-w-6xl mx-auto"
>
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
	<a class="font-semibold md:hover:text-primary-500 transition-colors" href="mailto:{CONTACT_EMAIL}"
		>{CONTACT_EMAIL}</a
	>
</footer>
