import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";
import { ArticleType, ParentCategoriesEntity } from "./types";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
	throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
	throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
	serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
	const listData = await client.getList<ArticleType>({
		endpoint: "articles",
		queries,
	});

	return listData;
};

// ブログの詳細を取得
export const getDetail = async (
	contentId: string,
	queries?: MicroCMSQueries
) => {
	const detailData = await client.getListDetail<ArticleType>({
		endpoint: "articles",
		contentId,
		queries,
	});

	return detailData;
};

// 親カテゴリを取得してメニューの項目として使う
export const getMenu = async (queries?: MicroCMSQueries) => {
	const listData = await client.getList<ParentCategoriesEntity>({
		endpoint: "parent",
		queries,
	});

	return listData;
};
