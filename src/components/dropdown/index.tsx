"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { clsx } from "clsx";

interface Props {
	currFont: string; //TODO: connect with zustand fontState
	handleClick?: () => void; //TODO: connect with zustand fontState
}

const Dropdown: React.FC<Props> = ({ handleClick, currFont }) => {
	return (
		<div className={clsx("dropdown-wrapper", "h-fit w-fit")}>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					onClick={handleClick}
					className={clsx(
						"dropdown-trigger",
						"focus:outline-none",
						"w-fit h-[2.4rem] flex items-center justify-between gap-x-[1.6rem] font-bold text-primary-600",
						"dark:text-primary-100",
						{
							[`font-sansserif text-body-m-mobile-sans md:text-body-m-large-sans`]:
								currFont === "Sans Serif",
							[`font-serif text-body-m-mobile-serif md:text-body-m-large-serif`]:
								currFont === "Serif",
							[`font-mono text-body-m-mobile-mono md:text-body-m-large-mono`]: currFont === "Mono",
						}
					)}
				>
					{currFont}
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
								"flex flex-col h-fit w-fit gap-y-[1.6rem]",
								"hover:cursor-pointer"
							)}
						>
							<DropdownMenu.Item
								className={clsx(
									"dropdown-content-group-item-sans",
									"hover:text-secondary-100 hover:outline-none",
									"font-sansserif text-body-m-mobile-sans font-bold",
									"md:text-body-m-large-sans"
								)}
							>
								Sans Serif
							</DropdownMenu.Item>
							<DropdownMenu.Item
								className={clsx(
									"dropdown-content-group-item-serif",
									"hover:text-secondary-100 hover:outline-none",
									"font-serif text-body-m-mobile-serif font-bold",
									"md:text-body-m-large-serif"
								)}
							>
								Serif
							</DropdownMenu.Item>
							<DropdownMenu.Item
								className={clsx(
									"dropdown-content-group-item-mono",
									"hover:text-secondary-100 hover:outline-none",
									"font-mono text-body-m-mobile-mono font-bold",
									"md:text-body-m-large-mono"
								)}
							>
								Mono
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</div>
	);
};

export default Dropdown;
