import { clsx } from "clsx";
import React from "react";
interface Props {
	classname: "header" | "horizontal";
}

const Divider: React.FC<Props> = ({ classname }) => {
	return (
		<div
			className={clsx(classname, {
				"h-[3.2rem] w-[0.1rem] bg-primary-300": classname === "header",
			})}
		/>
	);
};

export default Divider;
