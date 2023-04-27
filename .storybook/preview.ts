import type { Preview } from "@storybook/react";
import "../src/app/styles/globals.css";

export const globalTypes = {
	darkMode: {
		defaultValue: false, // Enable dark mode by default on all stories
	},
	className: {
		defaultValue: "dark", // Set your custom dark mode class name
	},
};

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
