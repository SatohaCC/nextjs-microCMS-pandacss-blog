import { render, screen } from "@testing-library/react";
import { ArticleType } from "../../../libs/types";
import AriticleCardUI from "./ArticleCardUI";

// Testデータの作成
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

const testArticle: ArticleType = {
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
const tags = ["tagA", "tagB"];

describe("ArticleCardUIの表示", () => {
	beforeEach(() => {
		render(<AriticleCardUI content={testArticle} tags={tags} />);
	});

	test("期待されるタグボタンの数をチェック", () => {
		const buttonsInTagsList = screen.getAllByRole("button");
		expect(buttonsInTagsList.length).toBe(tags.length);
	});

	test("期待されるタグのラベルをチェック", () => {
		tags.forEach((tag) => {
			expect(screen.getByText(tag)).toBeInTheDocument();
		});
	});

	test("記事のタイトルと要約が表示される", () => {
		expect(screen.getByText("テスト記事")).toBeInTheDocument();
		expect(
			screen.getByText("これはテスト記事の要約です。")
		).toBeInTheDocument();
	});

	test("正しいリンクが設定されている", () => {
		expect(screen.getByRole("link")).toHaveAttribute(
			"href",
			`/article/${testArticle.id}`
		);
	});
});
