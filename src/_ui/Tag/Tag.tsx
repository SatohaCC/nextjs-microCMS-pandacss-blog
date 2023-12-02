import { ReactNode } from "react";
import { type RecipeVariantProps } from "../../../styled-system/css";
import { tag } from "../../../styled-system/recipes";

type Props = {
	children: ReactNode;
	onClick?: () => void;
} & RecipeVariantProps<typeof tag>;

const Tag = (props: Props) => {
	const { children, visual } = props;
	return (
		<button {...props} className={tag({ visual })}>
			{children}
		</button>
	);
};

export default Tag;
