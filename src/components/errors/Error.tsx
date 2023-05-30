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
				<div
					className={clsx(
						"Not-Found-Error",
						"w-full h-[20.4rem] mt-[13.2rem] flex flex-col justify-between items-center"
					)}
				>
					<span className={clsx("text-[6.4rem]")}>😕</span>
					<h4
						className={clsx(
							"text-primary-600 font-bold",
							{
								"font-mono text-heading-s-mobile-mono md:text-heading-s-mono":
									currentFont === "mono",
								"font-sans text-heading-s-mobile-sans md:text-heading-s-sans":
									currentFont === "sans",
								"font-serif text-heading-s-mobile-serif md:text-heading-s-serif":
									currentFont === "serif",
							},
							"dark:text-primary-100"
						)}
					>
						No Definitions Found
					</h4>
					<h5
						className={clsx(
							"text-primary-400 font-medium",
							{
								"font-mono text-body-m-mobile-mono md:text-body-m-mono": currentFont === "mono",
								"font-sans text-body-m-mobile-sans md:text-body-m-sans": currentFont === "sans",
								"font-serif text-body-m-mobile-serif md:text-body-m-serif": currentFont === "serif",
							},
							"dark:text-primary-100"
						)}
					>
						Sorry pal, we couldn't find definitions for the word you were looking for. You can try
						the search again at later time or head to the web instead.
					</h5>
				</div>
			)}
		</section>
	);
};

export default Error;
