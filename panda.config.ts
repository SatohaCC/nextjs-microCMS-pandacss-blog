import { buttonRecipe } from "@/_ui/Button/Button.recipe";
import { tagRecipe } from "@/_ui/Tag/Tag.recipe";

import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	presets: [
		"@pandacss/preset-base",
		createPreset({
			accentColor: "teal",
			grayColor: "neutral",
			borderRadius: "sm",
		}),
	],
	// Where to look for your css declarations
	include: ["./src/_ui/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

	// Files to exclude
	exclude: [],
	jsxFramework: "react",

	// The output directory for your css system
	outdir: "styled-system",

	// Useful for theme customization
	theme: {
		extend: {
			recipes: {
				button: buttonRecipe,
				tag: tagRecipe,
			},

			keyframes: {
				rotateLeft: {
					"0%": { rotate: "360deg" },
					"100%": { rotate: "0deg" },
				},
				rotateRight: {
					"0%": { rotate: "0deg" },
					"100%": { rotate: "360deg" },
				},
			},
		},
	},

	globalCss: {
		html: {
			h: "full",
			overflowY: "scroll",
		},
		body: {
			bg: { base: "neutral.1", _dark: "#2C2C2C" },
			marginTop: "0",
		},
		fonts: {
			body: "system-ui, sans-serif",
			mono: "Menlo, monospace",
		},
		a: {
			color: "violet.11",
			_hover: { color: "teal.10", textDecoration: "none" },
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
