import { clsx } from "clsx";
import React from "react";

interface Props {
	word: string;
	phonetic: string;
}

const PhoneticDisplay: React.FC<Props> = ({ word, phonetic }) => {
	const currFont: string = "mono"; //TODO replace with zustand

	return (
		<div
			className={clsx("phonetic-display-wrapper", "w-fit h-fit flex flex-col gap-y-[0.9rem]", {
				"font-sans": currFont === "sans",
				"font-serif": currFont === "serif",
				"font-mono": currFont === "mono",
			})}
		>
			<h1
				className={clsx(
					"phonetic-display-title",
					"text-primary-600 font-bold",
					"dark:text-primary-100",
					{
						"text-heading-l-mobile-mono md:text-heading-l-mono": currFont === "mono",
						"text-heading-l-mobile-sans md:text-heading-l-sans": currFont === "sans",
						"text-heading-l-mobile-serif md:text-heading-l-serif": currFont === "serif",
					}
				)}
			>
				{word}
			</h1>
			<h2
				className={clsx("phonetic-display-pronunciation", "text-secondary-100 font-normal", {
					"text-heading-m-mobile-mono md:text-heading-m-mono": currFont === "mono",
					"text-heading-m-mobile-sans md:text-heading-m-sans": currFont === "sans",
					"text-heading-m-mobile-serif md:text-heading-m-serif": currFont === "serif",
				})}
			>
				{phonetic}
			</h2>
		</div>
	);
};

export default PhoneticDisplay;
