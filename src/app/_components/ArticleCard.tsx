import Link from "next/link";
import { formatDate } from "../../../libs/utils";
import { css } from "../../../styled-system/css";
import { ArticleType } from "../../../types/blog";
import { BlogTags } from "./BlogTags";

const textStyle = css({
	fontSize: "sm",
	color: "gray.500",
});

const titleStyle = css({
	fontSize: "2xl",
	fontWeight: "bold",
	color: "gray.900",
	pt: "1",
	pb: "2",
});

const cardStyle = css({
	_hover: {
		borderWidth: "1px",
		borderColor: "gray.200",
		rounded: "lg",
		shadow: "xs",
		transform: "scale(1.03)",
	},
	p: "3",
});

type Props = {
	content: ArticleType;
};

const ArticleCard = ({ content }: Props) => {
	const tags = content.categories
		.filter((category) => category.label !== "")
		.map((category) => category.label);

	return (
		<Link href={`/article/${content.id}`}>
			<div className={cardStyle}>
				<div className={textStyle}>{formatDate(content.createdAt)}</div>
				<div className={titleStyle}>{content.title}</div>
				<div className={textStyle}>{content.summary}</div>
				<BlogTags tags={[...tags]} />
			</div>
		</Link>
	);
};

export default ArticleCard;
