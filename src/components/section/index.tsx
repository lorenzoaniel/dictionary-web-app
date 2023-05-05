import { clsx } from "clsx";
import React from "react";

interface Props {
	classname: "header" | "searchbar" | "audio" | "mainseparator";
	children: JSX.Element | JSX.Element[];
}

const Section: React.FC<Props> = ({ classname, children }) => {
	return (
		<section
			className={clsx(classname, "w-full h-fit", {
				"flex justify-between items-center": classname === "header",
				"flex justify-between items-center mt-[2.4rem] md:mt-[5.4rem]": classname === "searchbar",
				"flex justify-between items-center mt-[2.8rem] md:mt-[5rem]": classname === "audio",
				"flex justify-between items-center mt-[3.4rem] md:mt-[3.4rem]":
					classname === "mainseparator",
			})}
		>
			{children}
		</section>
	);
};

export default Section;
