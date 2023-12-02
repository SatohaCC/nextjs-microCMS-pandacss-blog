import { ArticleType } from "../../../libs/types";
import { Box } from "../../../styled-system/jsx";
import ArticleCardUI from "../../_ui/Card/ArticleCardUI";

type Props = {
	contents: ArticleType[];
};

const ArticleList = ({ contents }: Props) => {
	if (!contents || contents.length === 0) {
		return <h1>No contents</h1>;
	}

	return (
		<ul>
			{contents.map((content) => {
				const tags = content.categories
					.filter((category) => category.label !== "")
					.map((category) => category.label);

				return (
					<li key={content.id}>
						<Box p={3}>
							<ArticleCardUI content={content} tags={tags} />
						</Box>
					</li>
				);
			})}
		</ul>
	);
};
export default ArticleList;
