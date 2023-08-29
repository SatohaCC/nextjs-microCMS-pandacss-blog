import ArticleList from "@/app/_components/ArticleList";
import Pagination from "@/app/_components/Pagination";
import { getList, getMenu } from "../../../../../libs/microcms";
import { PER_PAGE } from "../../../../../libs/siteInfo";
export const revalidate = 0;

export async function generateStaticParams() {
	const { contents, totalCount } = await getMenu();

	const range = (start: number, end: number) =>
		[...Array(end - start + 1)].map((_, i) => start + i);

	const paths = contents.map((cate) => {
		const totalPages = Math.ceil(totalCount / PER_PAGE);

		return range(1, totalPages).map((num) => ({
			page: `${cate.label}/page/${num}`,
		}));
	});

	return paths;
}

type Props = {
	params: { category: string; page: string };
};

export default async function PageIndex({ params: { category, page } }: Props) {
	const id = parseInt(page);
	const { contents, totalCount } = await getList({
		offset: (id - 1) * PER_PAGE,
		limit: PER_PAGE,
		filters: `categories[contains]${category}`,
	});

	return (
		<>
			<ArticleList contents={contents} />
			<Pagination
				totalCount={totalCount}
				category={category}
				currentPage={id}
			/>
		</>
	);
}
