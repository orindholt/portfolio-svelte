/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			white: "#FFFFFF",
			tan: "#F1EEE9",
			gray: "#C7C4C0",
			black: "#1E1E1E",
			orange: "#CF6048",
			transparent: "transparent",
			inherit: "inherit",
			current: "currentColor"
		},
		fontFamily: {
			lexend: ["Lexend Deca", "Inter", "sans-serif"],
			inter: ["Inter", "Lexend Deca", "sans-serif"]
		},
		extend: {
			spacing: {
				navbar: "6rem",
				page: "4rem"
			},
			flex: {
				2: "2 2 0%",
				3: "3 3 0%"
			},
			animation: {
				wave: "wave 5s ease-in-out infinite"
			},
			keyframes: {
				wave: {
					"0%, 80%, 100%": { transform: "initial" },
					"20%, 50%": { transform: "rotate(10deg)" },
					"35%, 65%": { transform: "rotate(-8deg)" }
				}
			}
		}
	},
	plugins: []
};
