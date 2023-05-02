"use client";

import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { clsx } from "clsx";

interface Props {
	isDarkmode: boolean;
	handleClick: () => void; //TODO: attach state toggle hook
}

const DarkmodeToggleButton: React.FC<Props> = ({ isDarkmode, handleClick }) => {
	return (
		<div
			className={clsx(
				"darkmode-toggle-wrapper",
				"group flex w-fit h-fit gap-x-[1.2rem]",
				"md:gap-x-[2rem]"
			)}
		>
			<Switch.Root
				onClick={handleClick}
				className={clsx(
					"darkmode-toggle-root",
					"h-[2rem] w-[4rem] flex flex-col rounded-[1rem] p-[0.3rem] bg-primary-400",
					"dark:bg-secondary-100",
					"group-hover:bg-secondary-100",
					"dark:group-hover:bg-primary-400"
				)}
			>
				<Switch.Thumb
					className={clsx(
						"darkmode-toggle-thumb",
						"h-[1.4rem] w-[1.4rem] rounded-full bg-primary-100",
						"transition ease-in-out",
						{
							"translate-x-[2rem]": isDarkmode,
							"translate-x-0": !isDarkmode,
						}
					)}
				/>
			</Switch.Root>
			<svg
				className="darkmode-toggle-icon-svg"
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				viewBox="0 0 22 22"
			>
				<path
					className={clsx(
						"darkmode-toggle-icon-path",
						{
							"group-hover:stroke-primary-400": isDarkmode,
							"group-hover:stroke-secondary-100": !isDarkmode,
						},
						{
							"stroke-secondary-100": isDarkmode,
							"stroke-primary-400": !isDarkmode,
						}
					)}
					fill="none"
					stroke="#838383"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
				/>
			</svg>
		</div>
	);
};

export default DarkmodeToggleButton;
