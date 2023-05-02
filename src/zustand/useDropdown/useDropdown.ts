import { create } from "zustand";

interface InitialState {
	currentFont: "Mono" | "Sans" | "Sans Serif";
	selectFont: (font: "Mono" | "Sans" | "Sans Serif") => void;
}

export const useDropdown = create<InitialState>((set, get) => ({
	currentFont: "Mono",
	selectFont: (font) => {
		// Update the state value of "currentFont"
		set({ currentFont: font });
	},
}));
