import DarkmodeToggleButton from "@/components/button/DarkmodeToggleButton";
import Divider from "@/components/divider";
import Dropdown from "@/components/dropdown";
import Logo from "@/components/logo";
import Section from "@/components/section";
import { clsx } from "clsx";
import React from "react";

const Home: React.FC = () => {
	return (
		<main className={clsx("App", "p-[2.4rem] h-full bg-primary-100", "dark:bg-primary-800")}>
			<Section classname={"header"}>
				<Logo />
				<div
					className={clsx("header-wrapper", "w-[16.9rem] h-fit flex justify-between items-center")}
				>
					<Dropdown currFont={"Mono"} />
					<Divider classname={"header"} />
					<DarkmodeToggleButton />
				</div>
			</Section>
		</main>
	);
};

export default Home;
