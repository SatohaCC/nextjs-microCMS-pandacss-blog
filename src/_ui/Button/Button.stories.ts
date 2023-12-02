import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
	title: "Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
	args: {
		visual: "solid",
		children: "solid Button",
		size: "md",
	},
};

export const Menu_2xl: Story = {
	args: {
		visual: "menu",
		children: "Menu Button 2xl",
		size: "2xl",
	},
};
export const Menu_MD: Story = {
	args: {
		visual: "menu",
		children: "Menu Button LG",
		size: "md",
	},
};

export const Clickable: Story = {
	args: {
		visual: "solid",
		children: "Clickable Button",
		size: "md",
		onClick: () => alert("Button clicked"),
	},
};
