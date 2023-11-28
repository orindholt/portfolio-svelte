<script>
	import Hr from "$lib/Hr.svelte";
	import NavbarLink from "./NavbarLink.svelte";
</script>

<nav class="px-page h-navbar fixed top-0 inset-x-0 flex flex-col bg-tan">
	<ul class="text-base my-auto font-bold flex items-center">
		<li class="text-2xl font-semibold mr-auto lg:flex-1">
			<a href="/#top">Oliver Rindholt</a>
		</li>
		<div class="flex justify-evenly flex-1">
			<NavbarLink href="#top">Sanctuary</NavbarLink>
			<NavbarLink href="#showcase">Showcase</NavbarLink>
			<NavbarLink href="#bio">Bio</NavbarLink>
			<NavbarLink href="#chat">Chat</NavbarLink>
		</div>
		<div class="flex gap-4">
			<li>
				<button type="button">
					<svg
						fill="none"
						height="24"
						shape-rendering="geometricPrecision"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						width="24"
						><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" /><path
							d="M16 16l4.5 4.5"
						/></svg
					>
				</button>
			</li>
			<li>
				<button type="button">
					<svg
						fill="none"
						height="24"
						shape-rendering="geometricPrecision"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						width="24"><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></svg
					>
				</button>
			</li>
		</div>
	</ul>
	<Hr />
</nav>
