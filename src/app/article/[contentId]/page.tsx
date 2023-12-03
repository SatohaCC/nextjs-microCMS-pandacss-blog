import "highlight.js/styles/a11y-dark.css";
import parse from "html-react-parser";
import { processer } from "microcms-richedit-processer";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDetail, getList } from "../../../../libs/microcms";
import { ARTICLE_REVALIDATE } from "../../../../libs/siteInfo";
import { formatDate } from "../../../../libs/utils";
import { css } from "../../../../styled-system/css";
import { Box } from "../../../../styled-system/jsx";
import BackBtn from "../../_components/BackBtn";

export const revalidate = ARTICLE_REVALIDATE;

export async function generateStaticParams() {
	const { contents } = await getList();

	const paths = contents.map((content) => {
		return {
			contentId: content.id,
		};
	});

	return [...paths];
}

type Props = {
	params: { contentId: string };
};

export async function generateMetadata({
	params: { contentId },
}: Props): Promise<Metadata> {
	const post = await getDetail(contentId);

	return {
		title: post?.title,
		description: post?.summary,
	};
}

export default async function StaticDetailPage({
	params: { contentId },
}: Props) {
	const content = await getDetail(contentId);

	if (!content) return notFound();

	const newContent = await processer(content.body, {
		code: { enabled: true },
		img: { lazy: false }, // srcのままにする設定。trueだとdata-srcに変換されてしまう。
	});

	return (
		<>
			<h1 className={css({ pt: "5" })}>{content.title}</h1>
			<div className={css({ color: "GrayText" })}>
				作成：{formatDate(content.publishedAt)}
			</div>
			<div className={css({ color: "GrayText" })}>
				更新：{formatDate(content.updatedAt)}
			</div>
			<p className={css({ py: "5" })}>{content.summary}</p>
			<div className={css({ pt: "5" })}>{parse(newContent)}</div>
			<Box pt={10}>
				<BackBtn />
			</Box>
		</>
	);
}
