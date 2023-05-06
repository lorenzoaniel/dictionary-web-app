import { clsx } from "clsx";
import React, { ReactNode } from "react";

interface Props {
	definitions: string[]; // array of definitions already parsed and cleaned
	classname: "noun" | "verb"; //
}

const MeaningDisplay: React.FC<Props> = ({ classname, definitions }) => {
	const currFont: string = "mono"; //TODO replace with zustand

	const createPoints = (definitions: string[]): ReactNode => {
		return definitions.map((curr, index) => (
			<li
				key={index + curr}
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
				{curr}
			</li>
		));
	};

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
