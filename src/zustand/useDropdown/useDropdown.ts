import { create } from "zustand";

interface InitialState {
	currentFont: string;
	selectFont: (font: string) => void;
}

const allowedFonts = ["mono", "sans", "serif"];

export const useDropdown = create<InitialState>((set, get) => ({
	currentFont: "mono",
	selectFont: (font: string) => {
		// Update the state value of "currentFont"
		if (allowedFonts.includes(font)) {
			set({ currentFont: font });
		} else {
			throw Error("allowed fonts are: " + allowedFonts.join(""));
		}
	},
}));
