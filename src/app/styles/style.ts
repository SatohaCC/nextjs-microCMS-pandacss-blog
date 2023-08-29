import { cva } from "../../../styled-system/css";

export const menuButton = cva({
	base: {
		display: "flex",
		fontWeight: "bold",
		cursor: "pointer",
	},

	variants: {
		visual: {
			solid: { bg: "red.200", color: "white" },
			outline: { borderWidth: "1px", borderColor: "red.200" },
			nomal: {
				bg: "teal.600",
				borderColor: "red.200",
				color: "white",
				borderRadius: "md",
			},

			text: { borderWidth: "0px" },
		},

		size: {
			md: { padding: "4", fontSize: { base: "md", md: "xl" } },
			lg: { padding: "4", fontSize: { base: "xl", md: "2xl" } },
		},
	},
});

export const button = cva({
	base: {
		display: "flex",
		fontWeight: "bold",
		cursor: "pointer",
		padding: "4",
		fontSize: { base: "md", md: "xl" },
	},

	variants: {
		visual: {
			solid: {
				borderWidth: "1px",
				borderColor: "teal.600",
				color: "teal.600",
				borderRadius: "md",
				_hover: {
					bg: "teal.600",
					color: "white",
				},
			},
			outline: { borderWidth: "1px", borderColor: "red.200" },
		},

		size: {
			sm: { padding: "4", fontSize: { base: "sm", md: "sm" } },
			md: { padding: "4", fontSize: { base: "md", md: "xl" } },
			lg: { padding: "4", fontSize: { base: "xl", md: "2xl" } },
		},
	},
});

export const tagStyle = cva({
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

