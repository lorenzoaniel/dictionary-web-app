import { PartialApiData } from "@/interface/ApiData";
import { testdata } from "@/testdata/testdata";
import { create } from "zustand";

interface InitialState {
	data: PartialApiData;
}

export const useSearch = create<InitialState>((get, set) => ({
	data: testdata,
}));
