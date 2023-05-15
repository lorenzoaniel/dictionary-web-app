import AudioButton from "@/components/button/AudioButton";
import DarkmodeToggleButton from "@/components/button/DarkmodeToggleButton";
import MeaningDisplay from "@/components/display/MeaningDisplay";
import PhoneticDisplay from "@/components/display/PhoneticDisplay";
import Divider from "@/components/divider";
import Dropdown from "@/components/dropdown";
import Logo from "@/components/logo";
import SearchBar from "@/components/searchbar";
import Section from "@/components/section";
import MainSeparator from "@/components/separator/MainSeparator";
import { clsx } from "clsx";
import React from "react";
import { testdata } from "@/testdata/testdata";
import SourcesDisplay from "@/components/display/SourcesDisplay";

const Home: React.FC = () => {
	const test = {
		word: "keyboard",
		phonetic: `/ˈkiːbɔːd/`,
		data: testdata,
	};

	return (
		<main
			className={clsx(
				"App",
				"p-[2.4rem] pb-[6.3rem] h-fit bg-primary-100",
				"dark:bg-primary-800",
				"md:px-[4rem] md:pt-[6rem] md:pb-[11.8rem]",
				"lg:px-[24%] lg:pt-[5.8em] lg:pb-[12.4.8em]"
			)}
		>
			<Section classname={"header"}>
				<Logo />
				<div
					className={clsx("header-wrapper", "w-[16.9rem] h-fit flex justify-between items-center")}
				>
					<Dropdown />
					<Divider classname={"header"} />
					<DarkmodeToggleButton />
				</div>
			</Section>
			<Section classname={"searchbar"}>
				<SearchBar />
			</Section>
			<Section classname={"audio"}>
				<PhoneticDisplay word={test.word} phonetic={test.phonetic} />
				<AudioButton />
			</Section>
			<Section classname={"mainseparator"}>
				<MainSeparator title={"noun"} />
			</Section>
			<Section classname={"definitions"}>
				<MeaningDisplay
					definitions={test.data[0].meanings[0].definitions}
					classname={"noun"}
					synonyms={test.data[0].meanings[0].synonyms}
					antonyms={test.data[0].meanings[0].antonyms}
				/>
			</Section>
			<Section classname={"mainseparator"}>
				<MainSeparator title={"verb"} />
			</Section>
			<Section classname={"definitions"}>
				<MeaningDisplay
					definitions={test.data[0].meanings[1].definitions}
					classname={"verb"}
					synonyms={test.data[0].meanings[1].synonyms}
					antonyms={test.data[0].meanings[1].antonyms}
				/>
			</Section>
			<Divider classname={"mainseparator"} custstyle="mt-[3.2rem]" />
			<Section classname={"sources"}>
				<SourcesDisplay sources={test.data[0].sourceUrls[0]} />
			</Section>
		</main>
	);
};

export default Home;
