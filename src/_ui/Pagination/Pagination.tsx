import Link from "next/link";
import { PER_PAGE } from "../../../libs/siteInfo";
import { cva } from "../../../styled-system/css";
import { Center, HStack } from "../../../styled-system/jsx";

const pageButton = cva({
	base: {
		alignItems: "center",
		appearance: "none",
		cursor: "pointer",
		display: "inline-flex",
		fontSize: "md",
		fontWeight: "semibold",
		h: "12",
		minWidth: "0",
		justifyContent: "center",
		rounded: "md",
		w: "12",
	},

	variants: {
		visual: {
			solid: {
				bg: "accent.default",
				color: "accent.fg",
				p: "2",
				justifyItems: "center",
				_hover: {
					background: "accent.emphasized",
				},
				_focusVisible: {
					outlineOffset: "2px",
					outline: "2px solid",
					outlineColor: "border.accent",
				},
			},
			outline: {
				color: "GrayText",
				borderWidth: "1px",
				borderColor: "border.default",
				_hover: {
					background: "gray.a2",
				},
				_focusVisible: {
					outlineOffset: "2px",
					outline: "2px solid",
					outlineColor: "border.outline",
				},
			},
		},
	},
});

type Props = {
	totalCount: number;
	category?: string;
	currentPage: number;
};

const Pagination = ({
	totalCount,
	category = "article",
	currentPage,
}: Props) => {
	const range = (start: number, end: number) =>
		[...Array(end - start + 1)].map((_, i) => start + i);
	const pages = range(1, Math.ceil(totalCount / PER_PAGE));

	return (
		<Center p={5}>
			<HStack>
				{pages.map((page, index) => (
					<Link href={`/${category}/page/${page}`} key={index}>
						<button
							className={pageButton({
								visual: page === currentPage ? "solid" : "outline",
							})}
						>
							{page}
						</button>
					</Link>
				))}
			</HStack>
		</Center>
	);
};

export default Pagination;
