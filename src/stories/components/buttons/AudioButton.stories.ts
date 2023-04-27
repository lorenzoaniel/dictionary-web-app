import AudioButton from "@/components/button/AudioButton";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AudioButton> = {
	title: "Components/AudioButton",
	component: AudioButton,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AudioButton>;

export const Default: Story = {};
