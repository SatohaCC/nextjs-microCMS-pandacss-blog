import Link from "next/link";
import { PER_PAGE } from "../../../libs/siteInfo";
import { cva } from "../../../styled-system/css";
import { Center, HStack } from "../../../styled-system/jsx";

const pageButton = cva({
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
		fontSize: "md",
		w: "12",
		h: "12",
		rounded: "md",
	},

	variants: {
		visual: {
			solid: { bg: "gray", color: "white", p: "2", justifyItems: "center" },
			outline: { borderWidth: "1px", borderColor: "gray", p: "2" },
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
