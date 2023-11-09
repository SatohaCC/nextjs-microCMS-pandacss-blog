import { ReactNode } from "react";
import { type RecipeVariantProps } from "../../../styled-system/css";
import { button } from "../../../styled-system/recipes";

interface Props {
	variant?: "solid" | "outline" | "ghost" | "link";
	size?: "sm" | "md" | "lg" | "xl" | "2xl";
	children: string;
	onClick?: () => void;
}

type ButtonProps = {
	children: ReactNode;
} & RecipeVariantProps<typeof button>;

const Button = (props: ButtonProps) => {
	const { children, size, variant } = props;
	return (
		<button {...props} className={button({ size, variant })}>
			{children}
		</button>
	);
};

export default Button;
