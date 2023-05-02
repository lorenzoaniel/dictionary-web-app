import { clsx } from "clsx";
import React from "react";

interface Props {
	classname: "header" | "search";
	children: JSX.Element | JSX.Element[];
}

const Section: React.FC<Props> = ({ classname, children }) => {
	return (
		<section
			className={clsx(classname, "w-full h-fit", {
				"flex justify-between items-center": classname === "header",
			})}
		>
			{children}
		</section>
	);
};

export default Section;
