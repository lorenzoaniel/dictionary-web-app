"use client";

import { useDropdown } from "@/zustand/useDropdown/useDropdown";
import { clsx } from "clsx";
import React from "react";

interface Props {
	word: string;
	phonetic: string;
}

const PhoneticDisplay: React.FC<Props> = ({ word, phonetic }) => {
	const { currentFont } = useDropdown();

	return (
		<div
			className={clsx("phonetic-display-wrapper", "w-fit h-fit flex flex-col gap-y-[0.9rem]", {
				"font-sans": currentFont === "sans",
				"font-serif": currentFont === "serif",
				"font-mono": currentFont === "mono",
			})}
		>
			<h1
				className={clsx(
					"phonetic-display-title",
					"text-primary-600 font-bold",
					"dark:text-primary-100",
					{
						"text-heading-l-mobile-mono md:text-heading-l-mono": currentFont === "mono",
						"text-heading-l-mobile-sans md:text-heading-l-sans": currentFont === "sans",
						"text-heading-l-mobile-serif md:text-heading-l-serif": currentFont === "serif",
					}
				)}
			>
				{word}
			</h1>
			<h2
				className={clsx("phonetic-display-pronunciation", "text-secondary-100 font-normal", {
					"text-heading-m-mobile-mono md:text-heading-m-mono": currentFont === "mono",
					"text-heading-m-mobile-sans md:text-heading-m-sans": currentFont === "sans",
					"text-heading-m-mobile-serif md:text-heading-m-serif": currentFont === "serif",
				})}
			>
				{phonetic}
			</h2>
		</div>
	);
};

export default PhoneticDisplay;
