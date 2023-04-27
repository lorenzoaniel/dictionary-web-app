/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./stories/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			backgroundColor: {},
			colors: {
				primary: {
					100: `#FFFFFF`,
					200: `#F4F4F4`,
					300: `#E9E9E9`,
					400: `#757575`,
					500: `#3A3A3A`,
					600: `#2D2D2D`,
					700: `#1F1F1F`,
					800: `#050505`,
				},
				secondary: {
					100: `#A445ED`,
				},
				error: {
					100: `#FF5252`,
				},
			},
			fontSize: {
				heading: {
					l: {
						sans: ["6.4rem", { lineHeight: "7.7rem", fontWeight: "700" }],
						serif: ["6.4rem", { lineHeight: "8.2rem", fontWeight: "700" }],
						mono: ["6.4rem", { lineHeight: "6.7rem", fontWeight: "700" }],
					},
				},
			},
			screens: {
				md: "768px",
				lg: "1440px",
			},
		},
	},
	plugins: [],
};
