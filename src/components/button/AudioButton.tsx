import React from "react";

const AudioButton: React.FC = () => {
	return (
		<button
			className="audio-button
      h-fit w-fit
			group
			bg-primary-700
			dark:bg-primary-100
      "
		>
			<svg
				className="audio-button-icon
        h-[4.8rem] w-[4.8rem]
        md:h-[7.5rem] md:w-[7.5rem]
        lg:h-[7.5rem] lg:w-[7.5rem]
        "
				xmlns="http://www.w3.org/2000/svg"
				width="75"
				height="75"
				viewBox="0 0 75 75"
			>
				<g fill="#A445ED" fill-rule="evenodd">
					<circle className="group-hover:opacity-100" cx="37.5" cy="37.5" r="37.5" opacity=".25" />
					<path className="group-hover:fill-primary-100" d="M29 27v21l21-10.5z" />
				</g>
			</svg>
		</button>
	);
};

export default AudioButton;
