"use client";

import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { clsx } from "clsx";
import { useDarkModeToggle } from "@/zustand/useDarkModeToggle/useDarkModeToggle";

const DarkmodeToggleButton: React.FC = () => {
	const darkmode = useDarkModeToggle();

	return (
		<div
			className={clsx(
				"darkmode-toggle-wrapper",
				"group flex w-fit h-fit gap-x-[1.2rem]",
				"md:gap-x-[2rem]"
			)}
		>
			<Switch.Root
				onClick={() => darkmode.toggleDarkMode()}
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
						"transition ease-in-out translate-x-0",
						"dark:translate-x-[2rem]"
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
						"stroke-primary-400 ",
						"dark:stroke-secondary-100",
						"group-hover:stroke-secondary-100",
						"dark:group-hover:stroke-primary-400"
					)}
					fill="none"
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
