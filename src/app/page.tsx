import {getList} from "../../libs/microcms";
import {PAGINATION_REVALIDATE} from "../../libs/siteInfo";
import PaginationContainer from "../_ui/Pagination/PaginationContainer";

import ArticleList from "./_components/ArticleList";

export const revalidate = PAGINATION_REVALIDATE;

export default async function Home() {
	const { contents, totalCount } = await getList({ limit: 5, offset: 0 });
	return (
		<>
			<ArticleList contents={contents} />
			<PaginationContainer totalCount={totalCount} currentPage={1} />
		</>
	);
}
