import AudioButton from "@/components/button/AudioButton";
import DarkmodeToggleButton from "@/components/button/DarkmodeToggleButton";
import PhoneticDisplay from "@/components/display/phoneticDisplay";
import Divider from "@/components/divider";
import Dropdown from "@/components/dropdown";
import Logo from "@/components/logo";
import SearchBar from "@/components/searchbar";
import Section from "@/components/section";
import MainSeparator from "@/components/separator/MainSeparator";
import { clsx } from "clsx";
import React from "react";

const Home: React.FC = () => {
	const test = {
		word: "keyboard",
		phonetic: `/ˈkiːbɔːd/`,
	};

	return (
		<main
			className={clsx(
				"App",
				"p-[2.4rem] h-full bg-primary-100",
				"dark:bg-primary-800",
				"md:px-[4rem] md:py-[6rem]",
				"lg:px-[24%] lg:py-[5.8em]"
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
		</main>
	);
};

export default Home;
