"use client";

import clsx from "clsx";
import React from "react";

interface Props {
	isEmpty: boolean;
}

const Error: React.FC<Props> = ({ isEmpty }) => {
	return (
		<section className={clsx("Error")}>
			{isEmpty ? <>empty error</> : <div className={clsx("Not-Found-Error")}>not found</div>}
		</section>
	);
};

export default Error;
