"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { clsx } from "clsx";
import { useDropdown } from "@/zustand/useDropdown/useDropdown";

const Dropdown: React.FC = () => {
	const { currentFont, selectFont } = useDropdown();

	const handleFontSelect = (font: string) => {
		selectFont(font);
	};

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				className={clsx(
					"dropdown-trigger",
					"focus:outline-none capitalize",
					"w-fit h-[2.4rem] flex items-center justify-between gap-x-[1.6rem] font-bold text-primary-600",
					"dark:text-primary-100",
					{
						"font-sans text-body-m-mobile-sans md:text-body-m-sans": currentFont === "sans",
						"font-serif text-body-m-mobile-serif md:text-body-m-serif": currentFont === "serif",
						"font-mono text-body-m-mobile-mono md:text-body-m-mono": currentFont === "mono",
					}
				)}
			>
				{currentFont}
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8">
					<path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6" />
				</svg>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className={clsx(
						"dropdown-content",
						"h-fit w-fit bg-primary-100 shadow-[0_0.5rem_3rem_rgba(0,0,0,0.1)] flex p-[2.4rem] pr-[6.9rem] rounded-[1.6rem]",
						"dark:bg-primary-700 shadow-[0_0.5rem_3rem_rgba(164, 69, 237, 1)"
					)}
				>
					<DropdownMenu.Group
						className={clsx(
							"dropdown-content-group",
							"flex flex-col h-fit w-fit gap-y-[1.6rem] text-primary-600",
							"dark:text-primary-100",
							"hover:cursor-pointer"
						)}
					>
						<DropdownMenu.Item
							className={clsx(
								"dropdown-content-group-item-sans",
								"font-sans text-body-m-mobile-sans font-bold",
								"hover:text-secondary-100 hover:outline-none",
								"md:text-body-m-sans"
							)}
							onSelect={() => handleFontSelect("sans")}
						>
							Sans Serif
						</DropdownMenu.Item>
						<DropdownMenu.Item
							className={clsx(
								"dropdown-content-group-item-serif",
								"font-serif text-body-m-mobile-serif font-bold",
								"hover:text-secondary-100 hover:outline-none",
								"md:text-body-m-serif"
							)}
							onSelect={() => handleFontSelect("serif")}
						>
							Serif
						</DropdownMenu.Item>
						<DropdownMenu.Item
							className={clsx(
								"dropdown-content-group-item-mono",
								"font-mono text-body-m-mobile-mono font-bold",
								"hover:text-secondary-100 hover:outline-none",
								"md:text-body-m-mono"
							)}
							onSelect={() => handleFontSelect("mono")}
						>
							Mono
						</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default Dropdown;
