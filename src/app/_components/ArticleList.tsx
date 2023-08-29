import { Box } from "../../../styled-system/jsx";
import { ArticleType } from "../../../types/blog";
import ArticleCard from "./ArticleCard";

type Props = {
	contents: ArticleType[];
};

const ArticleList = async ({ contents }: Props) => {
	if (!contents || contents.length === 0) {
		return <h1>No contents</h1>;
	}

	return (
		<div>
			{contents.map((content) => {
				return (
					<Box key={content.id} p={3}>
						<ArticleCard content={content} />
					</Box>
				);
			})}
		</div>
	);
};
export default ArticleList;
