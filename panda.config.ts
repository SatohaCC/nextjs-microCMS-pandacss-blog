import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/app/**/*.{ts,tsx,js,jsx}",
	],

	// Files to exclude
	exclude: [],
	jsxFramework: "react",

	// The output directory for your css system
	outdir: "styled-system",
	// Useful for theme customization
	theme: {
		semanticTokens: {
			colors: {
				primary: { value: "#0FEE0F" },
				secondary: { value: "#ca8c04" },
				mainText: { value: "#111827" },
				gray: { value: "#6b7280" },
			},
		},
	},

	globalCss: {
		html: {
			h: "full",
			overflowY: "scroll",
		},
		body: {
			bg: { base: "neutral.50", _dark: "#2C2C2C" },
			marginTop: "0",
		},
		fonts: {
			body: "system-ui, sans-serif",
			mono: "Menlo, monospace",
		},
		a: {
			color: "indigo.600",
			_hover: { color: "teal.600", textDecoration: "none" },
			cursor: "pointer",
		},
		h1: {
			fontSize: { base: "2xl", md: "3xl" },
			fontWeight: "600",
			pb: "2",
			mb: "5",
		},
		h2: {
			fontSize: { base: "xl", md: "2xl" },
			fontWeight: "600",
		},
		h3: {
			fontSize: { base: "xl", md: "2xl" },
			fontWeight: "600",
		},
		p: {
			fontSize: { base: "lg", md: "xl" },
			lineHeight: "tall",
			letterSpacing: "normal",
		},
		ol: {
			listStyleType: "decimal",
			listStylePosition: "inside",
		},
		blockquote: {
			m: "20px",
			pl: "10px",
			borderLeftWidth: "4px",
			borderLeftColor: "#f86c3d",
		},
	},
});
