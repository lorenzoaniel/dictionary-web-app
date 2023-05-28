"use client";

import { useDropdown } from "@/zustand/useDropdown/useDropdown";
import clsx from "clsx";
import React from "react";

interface Props {
	isEmpty: boolean;
}

const Error: React.FC<Props> = ({ isEmpty }) => {
	const { currentFont } = useDropdown();

	return (
		<section className={clsx("Error", "mt-[0.8rem]")}>
			{isEmpty ? (
				<div
					className={clsx("Empty-Error", "text-error-100", {
						"font-mono text-heading-s-mobile-mono md:text-heading-s-mono": currentFont === "mono",
						"font-sans text-heading-s-mobile-sans md:text-heading-s-sans": currentFont === "sans",
						"font-serif text-heading-s-mobile-serif md:text-heading-s-serif":
							currentFont === "serif",
					})}
				>
					Whoops, can't be empty...
				</div>
			) : (
				<div className={clsx("Not-Found-Error")}>
					<span>😕</span>
				</div>
			)}
		</section>
	);
};

export default Error;
