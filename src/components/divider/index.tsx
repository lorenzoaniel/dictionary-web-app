import { clsx } from "clsx";
import React from "react";
interface Props {
	classname: "header" | "mainseparator";
	custstyle?: string;
}

const Divider: React.FC<Props> = ({ classname, custstyle }) => {
	return (
		<div
			className={clsx(classname, "bg-primary-300", custstyle, {
				"h-[3.2rem] w-[0.1rem] dark:bg-primary-300": classname === "header",
				"h-[0.1rem] flex-1 dark:bg-primary-500": classname === "mainseparator",
			})}
		/>
	);
};

export default Divider;
