<script lang="ts">
	import Hr from "$lib/components/Hr.svelte";
	import Notification from "../Notification.svelte";
	import NavbarLink from "./NavbarLink.svelte";

	let isOpen: boolean = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function onNavigation() {
		isOpen = false;
	}
</script>

<nav class="md:px-page h-navbar fixed top-0 inset-x-0 flex flex-col bg-tan text-black z-50">
	<Notification>
		This website is still under construction. Some features may not work as intended.
	</Notification>
	<ul
		class="text-4xl md:text-base my-auto font-bold flex items-center max-md:px-[calc(theme(spacing.page)/2)]"
	>
		<li class="text-2xl font-semibold mr-auto lg:flex-1">
			<a href="/#top">Oliver Rindholt</a>
		</li>
		<div
			class="flex max-md:flex-col justify-center md:justify-evenly max-md:items-center max-md:gap-12 flex-2 max-md:fixed max-md:inset-0 max-md:transition-transform max-md:duration-500 max-md:ease-in-out max-md:bg-black max-md:bg-opacity-90 max-md:backdrop-blur-sm max-md:text-tan {isOpen
				? 'max-md:translate-x-0'
				: 'max-md:translate-x-full'}"
		>
			<NavbarLink on:navigation={onNavigation} href="#top">Sanctuary</NavbarLink>
			<NavbarLink on:navigation={onNavigation} href="#showcase">Showcase</NavbarLink>
			<NavbarLink on:navigation={onNavigation} href="#experience">Experience</NavbarLink>
			<NavbarLink on:navigation={onNavigation} href="#bio">Biography</NavbarLink>
			<!-- <NavbarLink href="#chat">Chat</NavbarLink> -->
		</div>
		<button type="button" class="relative z-10 w-8 h-8 md:hidden" on:click={toggleMenu}>
			{#if !isOpen}
				<svg
					class="stroke-black absolute inset-0"
					fill="none"
					height="32"
					width="32"
					shape-rendering="geometricPrecision"
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
					class="stroke-tan absolute inset-0"
					fill="none"
					height="32"
					width="32"
					shape-rendering="geometricPrecision"
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
	</ul>
	<Hr />
</nav>
