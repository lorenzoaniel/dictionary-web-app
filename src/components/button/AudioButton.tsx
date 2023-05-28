import { Phonetic } from "@/interface/ApiData";
import React, { useRef } from "react";

interface Props {
	audioData: Phonetic[] | undefined;
}

const AudioButton: React.FC<Props> = ({ audioData }) => {
	const audioRef = useRef<HTMLAudioElement | null>(null);

	let audioSrc: string | undefined;

	if (audioData) {
		const audioDataWithAudio = audioData.filter((curr) => {
			return curr.audio !== undefined && curr.audio !== "";
		});
		if (audioDataWithAudio.length > 0) {
			audioSrc = audioDataWithAudio[0].audio;
		}
	}

	const playAudio = () => {
		if (audioSrc) {
			const audio = new Audio(audioSrc);
			audio.play();
		}
	};

	return (
		<button
			onClick={() => playAudio()}
			className="audio-button
			group
			bg-transparent
      h-fit w-fit
      "
		>
			<audio ref={audioRef}>
				<source src={audioSrc} type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
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
				<g fill="#A445ED" fillRule="evenodd">
					<circle className="group-hover:opacity-100" cx="37.5" cy="37.5" r="37.5" opacity=".25" />
					<path className="group-hover:fill-primary-100" d="M29 27v21l21-10.5z" />
				</g>
			</svg>
		</button>
	);
};

export default AudioButton;
