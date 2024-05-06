/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			white: "#FFFFFF",
			gray: {
				50: "#f7f7f7",
				100: "#efefef",
				200: "#dcdcdc",
				300: "#bdbdbd",
				400: "#595959",
				500: "#474747",
				600: "#363636",
				700: "#262626",
				800: "#1c1c1c",
				900: "#1a1a1a",
				950: "#0f0f0f"
			},
			black: "#0a0a0a",
			orange: {
				50: "#fff4ed",
				100: "#ffe5d4",
				200: "#ffc8a9",
				300: "#ff9966",
				400: "#fe6f39",
				500: "#fc4913",
				600: "#ed2f09",
				700: "#c51f09",
				800: "#9c1a10",
				900: "#7e1810",
				950: "#440906"
			},
			transparent: "transparent",
			inherit: "inherit",
			current: "currentColor"
		},
		fontFamily: {
			unbounded: ["Unbounded", "sans-serif"]
		},
		extend: {
			spacing: {
				navbar: "5rem",
				page: "4.25rem"
			},
			flex: {
				2: "2 2 0%",
				3: "3 3 0%"
			},
			animation: {
				wave: "wave 5s ease-in-out infinite",
				"fade-in": "fade-in 0.75s ease-in-out"
			},
			keyframes: {
				wave: {
					"0%, 80%, 100%": { transform: "initial" },
					"20%, 50%": { transform: "rotate(10deg)" },
					"35%, 65%": { transform: "rotate(-8deg)" }
				},
				"fade-in": {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 }
				}
			}
		}
	},
	plugins: [require("tailwind-scrollbar")]
};
