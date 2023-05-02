import { create } from "zustand";

// Define the shape of the store's state
interface InitialState {
	isDark: boolean;
	toggleDarkMode: () => void;
}

// Create the store using Zustand's "create" function
export const useDarkModeToggle = create<InitialState>((set, get) => ({
	// Initialize the "isDark" state value based on the value in localStorage, or the user's preference
	isDark:
		localStorage.getItem("darkMode") === "true" ||
		window.matchMedia("(prefers-color-scheme: dark)").matches,
	// Define the "toggleDarkMode" function to update the "isDark" state value and localStorage
	toggleDarkMode: () => {
		// Update the "isDark" state value to be the opposite of its current value
		set((state) => ({ isDark: !state.isDark }));
		// Update the "darkMode" value in localStorage to match the new value
		localStorage.setItem("darkMode", (!get().isDark).toString());
	},
}));
