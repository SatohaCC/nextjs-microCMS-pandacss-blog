import Link from "next/link";
import { ArticleType } from "../../../libs/types";
import { formatDate } from "../../../libs/utils";
import { css } from "../../../styled-system/css";
import TagsList from "../../app/_components/TagsList";

const textStyle = css({
	color: "gray.10",
	fontSize: "sm",
});

const titleStyle = css({
	fontSize: "2xl",
	fontWeight: "bold",
	pt: "1",
	pb: "2",
});

const cardStyle = css({
	color: "gray.12",
	_hover: {
		rounded: "lg",
		shadow: "sm",
		color: "accent.default",
		background: "none",
	},
	p: "3",
});

type Props = {
	content: ArticleType;
	tags: string[];
};

const ArticleCardUI = ({ content, tags }: Props) => {
	const { id, createdAt, title, summary } = content;
	return (
		<Link href={`/article/${id}`}>
			<div className={cardStyle}>
				<div className={textStyle}>{formatDate(createdAt)}</div>
				<div className={titleStyle}>{title}</div>
				<div className={textStyle}>{summary}</div>
				<TagsList tags={[...tags]} />
			</div>
		</Link>
	);
};

export default ArticleCardUI;
