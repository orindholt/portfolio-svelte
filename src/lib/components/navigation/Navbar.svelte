<script lang="ts">
	import Logo from "../Logo.svelte";
	import NavbarLink from "./NavbarLink.svelte";

	let isOpen: boolean = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function onNavigation() {
		isOpen = false;
	}
</script>

<nav
	class="h-navbar sticky md:fixed top-0 inset-x-0 z-50 px-6 md:px-4 max-w-6xl md:mx-auto flex items-center max-md:justify-end md:bg-gray-950/75 md:backdrop-blur-lg md:rounded-b-md"
>
	<ul
		class="flex max-md:flex-col items-center max-md:justify-center max-md:gap-12 flex-1 max-md:fixed max-md:inset-0 max-md:transition-transform max-md:duration-500 max-md:ease-in-out max-md:bg-black max-md:bg-opacity-90 max-md:backdrop-blur-sm md:text-base text-4xl {isOpen
			? 'max-md:translate-x-0'
			: 'max-md:translate-x-full'}"
	>
		<NavbarLink on:navigation={onNavigation} href="#top">Surface</NavbarLink>
		<span class="opacity-20 max-md:hidden text-3xl">&#x2022;</span>
		<NavbarLink on:navigation={onNavigation} href="#bio">Profile</NavbarLink>
		<NavbarLink
			on:navigation={onNavigation}
			href="#top"
			class="max-md:hidden !flex-initial"
			aria-label="Top"
		>
			<Logo width={40} height={40} />
		</NavbarLink>
		<NavbarLink on:navigation={onNavigation} href="#featured">Featured</NavbarLink>
		<span class="opacity-20 max-md:hidden text-3xl">&#x2022;</span>
		<NavbarLink on:navigation={onNavigation} href="#experience">Experience</NavbarLink>
		<!-- <NavbarLink href="#chat">Chat</NavbarLink> -->
	</ul>
	<button
		name={isOpen ? "Close menu" : "Open menu"}
		type="button"
		class="relative z-10 size-8 md:hidden"
		on:click={toggleMenu}
	>
		<!-- TODO: Add icon from previous portfolio -->
		{#if !isOpen}
			<svg
				fill="none"
				height="32"
				width="32"
				shape-rendering="geometricPrecision"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				viewBox="0 0 24 24"
			>
				<path d="M3 12h18" />
				<path d="M3 6h18" />
				<path d="M3 18h18" />
			</svg>
		{:else}
			<svg
				fill="none"
				height="32"
				width="32"
				shape-rendering="geometricPrecision"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				viewBox="0 0 24 24"
			>
				<path d="M18 6L6 18" />
				<path d="M6 6l12 12" />
			</svg>
		{/if}
	</button>
</nav>
