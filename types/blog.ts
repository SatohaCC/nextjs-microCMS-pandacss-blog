// MicroCMSの型定義
export type ArticleType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	summary: string | null;
	body: string;
	categories: CategoriesEntity[];
	img?: Img | null;
};

export type ParentCategoriesEntity = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	label: string;
	href: string;
	children?: CategoriesEntity[];
};

export type CategoriesEntity = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	label: string;
	subLabel?: string | null;
	href: string;
};

export type Img = {
	url: string;
	height: number;
	width: number;
};
