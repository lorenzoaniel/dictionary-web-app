import { PartialApiData } from "@/interface/ApiData";
import { testdata } from "@/testdata/testdata";
import { create } from "zustand";

interface InitialState {
	data: PartialApiData;
	errorStatus: boolean; //if false search failed to find results
	emptyStatus: boolean;
	clickSearch: (word: string) => void;
	setEmpty: () => void;
}

export const useSearch = create<InitialState>((set) => ({
	data: testdata,
	errorStatus: false,
	emptyStatus: false,
	clickSearch: async (word: string) => {
		try {
			const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
			const result = await response.json();
			console.log(result);
			if (!result.hasOwnProperty("title")) {
				set({ data: result[0], errorStatus: false });
			} else {
				set({ errorStatus: true });
			}
		} catch (error) {
			console.error("An error occurred during the search:", error);
			set({ errorStatus: true });
		}
	},
	setEmpty: () => {
		set((state) => ({ emptyStatus: !state.emptyStatus }));
	},
}));
