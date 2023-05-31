"use client";

import { Definition } from "@/interface/ApiData";
import { useDropdown } from "@/zustand/useDropdown/useDropdown";
import { clsx } from "clsx";
import React, { ReactNode } from "react";

interface Props {
	definitions: Definition[] | undefined; // array of definitions already parsed and cleaned
	classname: "noun" | "verb";
	synonyms?: any;
	antonyms?: any;
}

const MeaningDisplay: React.FC<Props> = ({
	classname,
	definitions,
	synonyms = 0,
	antonyms = 0,
}) => {
	const { currentFont } = useDropdown();

	const createPoints = (definitions: any): ReactNode => {
		if (!definitions) return "";
		return definitions.map(
			(
				curr: { definition?: string; synonyms?: string[]; antonyms?: string[]; example?: string },
				index: number
			) => (
				<li
					key={index + (curr.definition ?? "")}
					className={clsx("text-secondary-100", {
						"font-mono text-body-m-mobile-mono md:text-body-m-mono": currentFont === "mono",
						"font-sans text-body-m-mobile-sans md:text-body-m-sans": currentFont === "sans",
						"font-serif text-body-m-mobile-serif md:text-body-m-serif": currentFont === "serif",
					})}
				>
					<span
						className={clsx(
							"text-primary-600",
							{
								"font-mono text-body-m-mobile-mono md:text-body-m-mono": currentFont === "mono",
								"font-sans text-body-m-mobile-sans md:text-body-m-sans": currentFont === "sans",
								"font-serif text-body-m-mobile-serif md:text-body-m-serif": currentFont === "serif",
							},
							"dark:text-primary-100",
							{ "flex flex-col": classname === "verb" }
						)}
					>
						{curr.definition}
						{classname === "verb" ? (
							<span
								className={clsx(
									"text-primary-400 mt-[1.3rem]",
									{
										"font-mono text-body-m-mobile-mono md:text-body-m-mono": currentFont === "mono",
										"font-sans text-body-m-mobile-sans md:text-body-m-sans": currentFont === "sans",
										"font-serif text-body-m-mobile-serif md:text-body-m-serif":
											currentFont === "serif",
									},
									"dark:text-primary-400"
								)}
							>
								{'"' + curr.example ? curr.example : "" + '"'}
							</span>
						) : (
							<></>
						)}
					</span>
				</li>
			)
		);
	};

	const createNyms = (nyms: string[] | null, title: string) => {
		if (nyms) {
			return (
				<div className={clsx("flex gap-x-[3.9rem] mt-[2.4rem]")}>
					<h4
						className={clsx(
							"text-primary-400",
							{
								"font-mono text-heading-s-mobile-mono md:text-heading-s-mono":
									currentFont === "mono",
								"font-sans text-heading-s-mobile-sans md:text-heading-s-sans":
									currentFont === "sans",
								"font-serif text-heading-s-mobile-serif md:text-heading-s-serif":
									currentFont === "serif",
							},
							"dark:text-primary-400"
						)}
					>
						{title}
					</h4>
					<div
						className={clsx(
							"text-secondary-100 font-bold h-fit flex flex-wrap gap-3",
							{
								"font-mono text-heading-s-mobile-mono md:text-heading-s-mono":
									currentFont === "mono",
								"font-sans text-heading-s-mobile-sans md:text-heading-s-sans":
									currentFont === "sans",
								"font-serif text-heading-s-mobile-serif md:text-heading-s-serif":
									currentFont === "serif",
							},
							"dark:text-secondary-100"
						)}
					>
						{nyms.map((curr: string | null, index: any) => (
							<span className={clsx("hover:underline")} key={index + curr}>
								{curr}
							</span>
						))}
					</div>
				</div>
			);
		} else {
			return null;
		}
	};

	return (
		<article className={clsx("meaning-display-" + classname, "w-fit h-fit")}>
			<h4
				className={clsx(
					"meaning-display-title",
					"text-primary-400",
					{
						"font-mono text-heading-s-mobile-mono md:text-heading-s-mono": currentFont === "mono",
						"font-sans text-heading-s-mobile-sans md:text-heading-s-sans": currentFont === "sans",
						"font-serif text-heading-s-mobile-serif md:text-heading-s-serif":
							currentFont === "serif",
					},
					"dark:text-primary-400"
				)}
			>
				Meaning
			</h4>
			<ul
				className={clsx(
					"meaning-display-ul-wrapper",
					"list-disc pl-[2rem] mt-[1.7rem] flex flex-col gap-y-[1.3rem]"
				)}
			>
				{createPoints(definitions)}
			</ul>
			{synonyms.length > 0 && createNyms(synonyms, "Synonyms")}
			{antonyms.length > 0 && createNyms(antonyms, "Antonyms")}
		</article>
	);
};

export default MeaningDisplay;
