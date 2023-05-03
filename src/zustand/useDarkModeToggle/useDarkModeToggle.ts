import { create } from "zustand";

interface InitialState {
	isDark: boolean;
	toggleDarkMode: () => void;
}

//TODO: FIX ISSUE REGARDING COLOR SCHEME NOT UPDATING ON TOGGLE

export const useDarkModeToggle = create<InitialState>((set, get) => ({
	isDark:
		(typeof localStorage !== "undefined" && localStorage.getItem("darkMode") === "true") ||
		(typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches),
	toggleDarkMode: () => {
		set((state) => ({ isDark: !state.isDark }));
		localStorage.setItem("darkMode", !get().isDark ? "dark" : "");
		if (!get().isDark) {
			document.documentElement.classList.remove("dark");
		} else {
			document.documentElement.classList.add("dark");
		}
	},
}));
