import type { Meta, StoryObj } from "@storybook/react";

import Tag from "./Tag";

const meta = {
	title: "Tag",
	component: Tag,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outline: Story = {
	args: {
		visual: "outline",
		children: "Tag",
	},
};
