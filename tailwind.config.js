/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
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
			fontFamily: {
				mono: ["inconsolata", "mono"],
				serif: ["lora", "serif"],
				serifitalic: ["loraItalic", "serif"],
				sansserif: ["inter", "sans"],
			},
			fontSize: {
				"heading-l-sans": ["6.4rem", { lineHeight: "7.7rem" }],
				"heading-l-serif": ["6.4rem", { lineHeight: "8.2rem" }],
				"heading-l-mono": ["6.4rem", { lineHeight: "6.7rem" }],
				"body-m-mobile-sans": ["1.4rem", { lineHeight: "2.4rem" }],
				"body-m-mobile-serif": ["1.4rem", { lineHeight: "2.4rem" }],
				"body-m-mobile-mono": ["1.4rem", { lineHeight: "2.4rem" }],
				"body-m-large-sans": ["1.8rem", { lineHeight: "2.4rem" }],
				"body-m-large-serif": ["1.8rem", { lineHeight: "2.4rem" }],
				"body-m-large-mono": ["1.8rem", { lineHeight: "2.4rem" }],
			},
			screens: {
				md: "768px",
				lg: "1440px",
			},
		},
	},
	plugins: [],
};
