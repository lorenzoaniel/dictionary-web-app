interface WordData {
	word: string;
	phonetic: string;
	phonetics: Phonetic[];
	meanings: Meaning[];
	license: License;
	sourceUrls: string[];
}

export interface Phonetic {
	text: string;
	audio: string;
	sourceUrl?: string; // optional since not all phonetics have sourceUrl and license
	license?: License;
}

export interface Meaning {
	partOfSpeech: string;
	definitions: Definition[];
	synonyms?: string[]; // optional since not all meanings have synonyms and antonyms
	antonyms?: string[];
}

export interface Definition {
	definition: string;
	synonyms: string[];
	antonyms: string[];
	example?: string; // optional since not all definitions have examples
}

export interface License {
	name: string;
	url: string;
}

export type PartialApiData = Partial<WordData>;
