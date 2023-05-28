"use client";

import { useDropdown } from "@/zustand/useDropdown/useDropdown";
import { useSearch } from "@/zustand/useSearch/useSearch";
import { clsx } from "clsx";
import React, { useEffect, useState } from "react";

const SearchBar: React.FC = () => {
	const [searchInput, setSearchInput] = useState("");
	const { currentFont } = useDropdown();
	const { clickSearch, setEmpty, emptyStatus } = useSearch();

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
				onChange={(e) => setSearchInput(e.target.value)}
				type="search"
				aria-placeholder="Search for any word..."
				placeholder="Search for any word..."
				className={clsx(
					"search-bar",
					"h-full w-full bg-transparent text-primary-600 placeholder:text-primary-600 placeholder:opacity-25 focus:outline-none text-body-m-serif font-bold",
					"dark:text-primary-100",
					{
						"font-mono text-heading-s-mobile-mono md:text-heading-s-mono": currentFont === "mono",
						"font-sans text-heading-s-mobile-sans md:text-heading-s-sans": currentFont === "sans",
						"font-serif text-heading-s-mobile-serif md:text-heading-s-serif":
							currentFont === "serif",
					},
					"border-error-100"
				)}
			/>
			<svg
				onClick={() => {
					if (searchInput) {
						clickSearch(searchInput);
						if (emptyStatus) setEmpty();
					} else {
						setEmpty();
					}
				}}
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 18 18"
			>
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
