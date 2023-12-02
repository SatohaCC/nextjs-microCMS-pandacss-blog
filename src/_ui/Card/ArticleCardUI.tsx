import { BlogTags } from "@/app/_components/BlogTags";
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
	color: "gray.12",
	fontWeight: "bold",
	pt: "1",
	pb: "2",
});

const cardStyle = css({
	_hover: {
		rounded: "lg",
		shadow: "sm",
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
				<BlogTags tags={[...props.tags]} />
			</div>
		</Link>
	);
};

export default ArticleCardUI;
