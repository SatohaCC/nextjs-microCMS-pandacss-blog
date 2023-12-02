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
