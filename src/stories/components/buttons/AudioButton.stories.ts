import AudioButton from "@/components/button/AudioButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AudioButton> = {
	title: "Components/AudioButton",
	component: AudioButton,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AudioButton>;

export const Default: Story = {};
