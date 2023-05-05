import { clsx } from "clsx";
import React from "react";

const SearchBar: React.FC = () => {
	const currFont: string = "mono"; //TODO replace with zustand
	return (
		<div
			className={clsx(
				"search-bar-wrapper",
				"h-[4.8rem] w-full bg-primary-200 rounded-[1.6rem] flex items-center px-[2.4rem] py-[1.5rem] gap-x-[1rem]",
				"md:h-[6.4rem]",
				"dark:bg-primary-700"
			)}
		>
			<input
				type="search"
				aria-placeholder="Search for any word..."
				placeholder="Search for any word..."
				className={clsx(
					"search-bar",
					"h-full w-full bg-transparent text-primary-600 placeholder:text-primary-600 placeholder:opacity-25 focus:outline-none text-body-m-serif font-bold",
					"dark:text-primary-100",
					{
						"text-heading-s-mobile-mono md:text-heading-s-mono": currFont === "mono",
						"text-heading-s-mobile-sans md:text-heading-s-sans": currFont === "sans",
						"text-heading-s-mobile-serif md:text-heading-s-serif": currFont === "serif",
					}
				)}
			/>
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
				<path
					fill="none"
					stroke="#A445ED"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
				/>
			</svg>
		</div>
	);
};

export default SearchBar;
