import { PartialApiData } from "@/interface/ApiData";
import { testdata } from "@/testdata/testdata";
import { create } from "zustand";

interface InitialState {
	data: PartialApiData;
	searchStatus: boolean; //if false search failed to find results
	clickSearch: (word: string) => void;
}

export const useSearch = create<InitialState>((set) => ({
	data: testdata,
	searchStatus: true,
	clickSearch: async (word: string) => {
		try {
			const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
			const result = await response.json();
			if (Array.isArray(result) && result.length > 0) {
				set({ data: result[0], searchStatus: true });
			} else {
				set({ searchStatus: false });
			}
		} catch (error) {
			console.error("An error occurred during the search:", error);
			set({ searchStatus: false });
		}
	},
}));
