<script>
	import SocialLink from "$lib/components/socials/SocialLink.svelte";
	import { CONTACT_EMAIL, Socials } from "../../util/constants";
</script>

<footer class="h-24 bg-black text-white flex flex-col items-center justify-between py-4">
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
	<a class="font-semibold lg:hover:text-orange transition-colors" href="mailto:{CONTACT_EMAIL}"
		>{CONTACT_EMAIL}</a
	>
</footer>
