"use client";

import { useDropdown } from "@/zustand/useDropdown/useDropdown";
import { clsx } from "clsx";
import React from "react";

interface Props {
	sources: string;
}

const SourcesDisplay: React.FC<Props> = ({ sources }) => {
	const { currentFont } = useDropdown();

	return (
		<aside className={clsx("sources", "flex flex-col h-fit w-fit")}>
			<h4
				className={clsx(
					"sources-title",
					"text-primary-400",
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
			<a
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
				{sources}
			</a>
		</aside>
	);
};

export default SourcesDisplay;
