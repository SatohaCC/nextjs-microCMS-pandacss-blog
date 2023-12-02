import TagsList from "@/app/_components/TagsList";
import Link from "next/link";
import { formatDate } from "../../../libs/utils";
import { css } from "../../../styled-system/css";
import { ArticleType } from "../../../types/blog";

const textStyle = css({
	fontSize: "sm",
	color: "gray.10",
});

const titleStyle = css({
	fontSize: "2xl",
	fontWeight: "bold",
	pt: "1",
	pb: "2",
});

const cardStyle = css({
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

const ArticleCardUI = (props: Props) => {
	return (
		<Link href={`/article/${props.content.id}`}>
			<div className={cardStyle}>
				<div className={textStyle}>{formatDate(props.content.createdAt)}</div>
				<div className={titleStyle}>{props.content.title}</div>
				<div className={textStyle}>{props.content.summary}</div>
				<TagsList tags={[...props.tags]} />
			</div>
		</Link>
	);
};

export default ArticleCardUI;
