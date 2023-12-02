import { ReactNode } from "react";
import { type RecipeVariantProps } from "../../../styled-system/css";
import { button } from "../../../styled-system/recipes";

type ButtonProps = {
	children: ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & RecipeVariantProps<typeof button>;

const Button = (props: ButtonProps) => {
	const { children, size, visual } = props;
	return (
		<button {...props} className={button({ size, visual })}>
			{children}
		</button>
	);
};

export default Button;
