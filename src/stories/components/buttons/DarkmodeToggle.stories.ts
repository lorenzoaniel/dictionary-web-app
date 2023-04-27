import DarkmodeToggleButton from "@/components/button/DarkmodeToggleButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DarkmodeToggleButton> = {
	title: "Components/DarkmodeToggleButton",
	component: DarkmodeToggleButton,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DarkmodeToggleButton>;

export const Default: Story = {};
