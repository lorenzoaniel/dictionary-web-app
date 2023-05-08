import { clsx } from "clsx";
import React, { ReactNode } from "react";
// import { PartialRawData } from "@/testdata/testdata";

interface Props {
	definitions: any; // array of definitions already parsed and cleaned
	classname: "noun" | "verb"; //
}

const MeaningDisplay: React.FC<Props> = ({ classname, definitions }) => {
	const currFont: string = "mono"; //TODO replace with zustand

	const createPoints = (definitions: any): ReactNode => {
		return definitions.map(
			(curr: { definition?: string; synonyms?: string[]; antonyms?: string[] }, index: number) => (
				<li
					key={index + (curr.definition ?? "")}
					className={clsx(
						"text-primary-600",
						{
							"text-body-m-mobile-mono md:text-body-m-mono": currFont === "mono",
							"text-body-m-mobile-sans md:text-body-m-sans": currFont === "sans",
							"text-body-m-mobile-serif md:text-body-m-serif": currFont === "serif",
						},
						"dark:text-secondary-100"
					)}
				>
					{curr.definition}
				</li>
			)
		);
	};
	createPoints(definitions);

	return (
		<article className={clsx(classname, "")}>
			<h4>Meaning</h4>
			<ul className={clsx("meaning-display-ul-wrapper", "list-disc text-secondary-100")}>
				{createPoints(definitions)}
			</ul>
		</article>
	);
};

export default MeaningDisplay;
