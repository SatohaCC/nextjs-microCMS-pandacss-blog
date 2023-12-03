import { getList, getMenu, getPaths } from "../../../../../libs/microcms";
import { PAGINATION_REVALIDATE, PER_PAGE } from "../../../../../libs/siteInfo";
import Pagination from "../../../../_ui/Pagination/Pagination";
import ArticleList from "../../../_components/ArticleList";

export const revalidate = PAGINATION_REVALIDATE;

export async function generateStaticParams() {
	const { contents, totalCount } = await getMenu();
	return getPaths({ contents, totalCount });
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
