import { getList } from "../../libs/microcms";
import { PAGINATION_REVALIDATE } from "../../libs/siteInfo";
import ArticleList from "./_components/ArticleList";
import Pagination from "./_components/Pagination";

export const revalidate = PAGINATION_REVALIDATE;

export default async function Home() {
	const { contents, totalCount } = await getList({ limit: 5, offset: 0 });
	return (
		<>
			<ArticleList contents={contents} />
			<Pagination totalCount={totalCount} currentPage={1} />
		</>
	);
}
