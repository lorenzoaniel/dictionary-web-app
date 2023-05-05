import { clsx } from "clsx";
import React from "react";
import Divider from "../divider";

interface Props {
	title: string;
}

const MainSeparator: React.FC<Props> = ({ title }) => {
	const currFont: string = "mono"; //TODO replace with zustand

	return (
		<div
			className={clsx(
				"main-separator-wrapper",
				"w-full h-[1.8rem] flex justify-between items-center gap-x-[2.5rem]"
			)}
		>
			<h3
				className={clsx(
					"main-separator-title",
					"h-fit w-fit text-primary-600 font-bold",
					"dark:text-primary-100",
					{
						"text-heading-m-mobile-mono md:text-heading-m-mono": currFont === "mono",
						"text-heading-m-mobile-sans md:text-heading-m-sans": currFont === "sans",
						"text-heading-m-mobile-serif md:text-heading-m-serif": currFont === "serif",
					}
				)}
			>
				{title}
			</h3>
			<Divider classname={"mainseparator"} />
		</div>
	);
};

export default MainSeparator;
