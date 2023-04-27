"use client";

import React, { useState } from "react";
import * as Switch from "@radix-ui/react-switch";

const DarkmodeToggleButton: React.FC = () => {
	return (
		<div
			className="darkmode-toggle-wrapper
			group
			flex
			w-fit
			h-fit
			gap-x-[1.2rem]
      "
		>
			<Switch.Root
				className="darkmode-toggle-root
        h-[2rem] w-[4rem]
				flex
				rounded-[1rem]
				p-[0.3rem]
				bg-primary-400
        "
			>
				<Switch.Thumb
					className="darkmode-toggle-thumb
          h-[1.4rem] w-[1.4rem]
					rounded-full
					bg-primary-100
          "
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
					className="darkmode-toggle-icon-path"
					fill="none"
					stroke="#838383"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
				/>
			</svg>
		</div>
	);
};

export default DarkmodeToggleButton;
