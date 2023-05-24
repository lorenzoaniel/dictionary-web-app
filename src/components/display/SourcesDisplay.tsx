"use client";

import { useDropdown } from "@/zustand/useDropdown/useDropdown";
import { clsx } from "clsx";
import React from "react";

interface Props {
	sources: string[] | undefined;
}

const SourcesDisplay: React.FC<Props> = ({ sources }) => {
	const { currentFont } = useDropdown();

	const createSource = (sources: string[] | undefined) => {
		let temp = sources;
		if (sources === undefined) temp = [];
		return temp?.map((currSource, index) => {
			return (
				<span key={currSource + index} className={clsx("flex gap-x-[0.8rem]")}>
					<a
						target="_blank"
						className={clsx(
							"sources-link",
							"text-primary-600",
							{
								"font-mono text-body-s-mobile-mono md:text-body-s-mono": currentFont === "mono",
								"font-sans text-body-s-mobile-sans md:text-body-s-sans": currentFont === "sans",
								"font-serif text-body-s-mobile-serif md:text-body-s-serif": currentFont === "serif",
							},
							"dark:text-primary-100"
						)}
					>
						{currSource}
					</a>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
						<path
							fill="none"
							stroke="#838383"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
						/>
					</svg>
				</span>
			);
		});
	};

	return (
		<aside className={clsx("sources", "flex flex-col h-fit w-fit")}>
			<h4
				className={clsx(
					"sources-title",
					"text-primary-400 underline",
					{
						"font-mono text-body-s-mobile-mono md:text-body-s-mono": currentFont === "mono",
						"font-sans text-body-s-mobile-sans md:text-body-s-sans": currentFont === "sans",
						"font-serif text-body-s-mobile-serif md:text-body-s-serif": currentFont === "serif",
					},
					"dark:text-primary-400"
				)}
			>
				Source
			</h4>
			{createSource(sources)}
		</aside>
	);
};

export default SourcesDisplay;
