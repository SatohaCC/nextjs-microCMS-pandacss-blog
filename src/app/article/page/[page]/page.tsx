import ArticleList from "@/app/_components/ArticleList";
import Pagination from "@/app/_components/Pagination";
import { getList } from "../../../../../libs/microcms";
import { PAGINATION_REVALIDATE, PER_PAGE } from "../../../../../libs/siteInfo";

export const revalidate = PAGINATION_REVALIDATE;

export async function generateStaticParams() {
	const { totalCount } = await getList();

	const range = (start: number, end: number) =>
		[...Array(end - start + 1)].map((_, i) => start + i);

	const paths = range(2, Math.ceil(totalCount / PER_PAGE)).map((num) => ({
		page: `${num}`,
	}));

	return paths;
}

type Props = {
	params: {
		page: string;
	};
};

export default async function PageIndex({ params: { page } }: Props) {
	const id = parseInt(page);
	const { contents, totalCount } = await getList({
		offset: (id - 1) * PER_PAGE,
		limit: PER_PAGE,
	});

	return (
		<>
			<ArticleList contents={contents} />
			<Pagination totalCount={totalCount} currentPage={id} />
		</>
	);
}
