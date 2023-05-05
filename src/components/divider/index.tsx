import { clsx } from "clsx";
import React from "react";
interface Props {
	classname: "header" | "mainseparator";
}

const Divider: React.FC<Props> = ({ classname }) => {
	return (
		<div
			className={clsx(classname, "bg-primary-300", "dark:bg-primary-500", {
				"h-[3.2rem] w-[0.1rem]": classname === "header",
				"h-[0.1rem] flex-1": classname === "mainseparator",
			})}
		/>
	);
};

export default Divider;
