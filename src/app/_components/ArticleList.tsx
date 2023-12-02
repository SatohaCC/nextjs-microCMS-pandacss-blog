import ArticleCardUI from "@/_ui/Card/AriticleCardUI";
import { ArticleType } from "../../../libs/types";
import { Box } from "../../../styled-system/jsx";

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
				const tags = content.categories
					.filter((category) => category.label !== "")
					.map((category) => category.label);

				return (
					<Box key={content.id} p={3}>
						<ArticleCardUI content={content} tags={tags} />
					</Box>
				);
			})}
		</div>
	);
};
export default ArticleList;
