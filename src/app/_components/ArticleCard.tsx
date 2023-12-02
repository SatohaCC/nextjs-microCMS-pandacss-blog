import ArticleCardUI from "@/_ui/Card/ArticleCardUI";
import { ArticleType } from "../../../types/blog";

type Props = {
	content: ArticleType;
};

const ArticleCard = ({ content }: Props) => {
	const tags = content.categories
		.filter((category) => category.label !== "")
		.map((category) => category.label);

	return <ArticleCardUI content={content} tags={tags} />;
};

export default ArticleCard;
