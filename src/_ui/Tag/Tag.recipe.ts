import { defineRecipe } from "@pandacss/dev";

export const tagRecipe = defineRecipe({
	className: "tag",
	base: {
		display: "flex",
		fontWeight: "bold",
		cursor: "pointer",
		p: "1",
		fontSize: "xs",
	},

	variants: {
		visual: {
			solid: { bg: "gray.200", color: "white", rounded: "md" },
			outline: {
				borderWidth: "1px",
				borderColor: "gray.200",
				rounded: "md",
				shadow: "xs",
			},
		},
	},
});
