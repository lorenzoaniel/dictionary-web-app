"use client";

import DarkmodeToggleButton from "@/components/button/DarkmodeToggleButton";
import Divider from "@/components/divider";
import Dropdown from "@/components/dropdown";
import Logo from "@/components/logo";
import Section from "@/components/section";
import { useDarkModeToggle } from "@/zustand/useDarkModeToggle/useDarkModeToggle";
import { clsx } from "clsx";
import React, { useEffect } from "react";

const Home: React.FC = () => {
	const darkmode = useDarkModeToggle();

	useEffect(() => {
		if (darkmode.isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkmode]);

	return (
		<main className={clsx("App", "p-[2.4rem]")}>
			<Section classname={"header"}>
				<Logo />
				<div
					className={clsx("header-wrapper", "w-[16.9rem] h-fit flex justify-between items-center")}
				>
					<Dropdown currFont={"Mono"} />
					<Divider classname={"header"} />
					<DarkmodeToggleButton
						isDarkmode={darkmode.isDark}
						handleClick={() => darkmode.toggleDarkMode()}
					/>
				</div>
			</Section>
		</main>
	);
};

export default Home;
