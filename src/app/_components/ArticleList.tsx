import { ArticleType } from "../../../libs/types";
import { css } from "../../../styled-system/css";
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
					<li key={content.id} className={css({ p: "3" })}>
						<ArticleCardUI content={content} tags={tags} />
					</li>
				);
			})}
		</ul>
	);
};
export default ArticleList;
