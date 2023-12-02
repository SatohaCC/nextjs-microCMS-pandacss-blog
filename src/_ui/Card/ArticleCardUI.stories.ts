import { Meta, StoryObj } from "@storybook/react";
import { ArticleType } from "../../../libs/types";
import ArticleCardUI from "./ArticleCardUI";

const meta: Meta = {
	title: "Components/ArticleCardUI",
	component: ArticleCardUI,

	tags: ["autodocs"],
} satisfies Meta<typeof ArticleCardUI>;

export default meta;

// モックデータの作成
const categories = [
	{
		id: "101",
		createdAt: "2023-01-01T00:00:00Z",
		updatedAt: "2023-01-01T00:00:00Z",
		publishedAt: "2023-01-01T00:00:00Z",
		revisedAt: "2023-01-01T00:00:00Z",
		label: "カテゴリ1",
		href: "/category1",
	},
	{
		id: "102",
		createdAt: "2023-01-01T00:00:00Z",
		updatedAt: "2023-01-01T00:00:00Z",
		publishedAt: "2023-01-01T00:00:00Z",
		revisedAt: "2023-01-01T00:00:00Z",
		label: "カテゴリ2",
		href: "/category2",
		subLabel: "サブカテゴリ",
	},
];
const mockArticle: ArticleType = {
	id: "1",
	createdAt: "2023-01-01T00:00:00Z",
	updatedAt: "2023-01-01T00:00:00Z",
	publishedAt: "2023-01-01T00:00:00Z",
	revisedAt: "2023-01-01T00:00:00Z",
	title: "テスト記事",
	summary: "これはテスト記事の要約です。",
	body: "これはテスト記事の本文です。",
	categories: categories,
	img: {
		url: "https://example.com/image.jpg",
		height: 300,
		width: 500,
	},
};

const tags = ["tag1", "tag2", "tag3"];

// ストーリーの定義
export const Default: StoryObj<typeof ArticleCardUI> = {
	args: {
		content: mockArticle,
		tags: tags,
	},
};
