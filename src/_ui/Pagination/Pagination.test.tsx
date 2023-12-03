import { render, screen } from "@testing-library/react";
import { PER_PAGE } from "../../../libs/siteInfo";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
	const totalCount = 50; // 全アイテム数
	const category = "article";

	describe("categoryあり", () => {
		test("正しいページ数が表示されること", () => {
			render(
				<Pagination
					totalCount={totalCount}
					category={category}
					currentPage={1}
				/>
			);
			const pages = Math.ceil(totalCount / PER_PAGE);
			expect(screen.getAllByRole("button")).toHaveLength(pages);
		});
		test("現在のページが強調表示されること", () => {
			const currentPage = 3;
			render(
				<Pagination
					totalCount={totalCount}
					category={category}
					currentPage={currentPage}
				/>
			);
			const currentPageButton = screen.getByText(currentPage.toString());
			expect(currentPageButton).toHaveClass("bg_accent.default text_accent.fg");
		});

		test("非現在ページが強調表示されないこと", () => {
			const currentPage = 3;
			render(
				<Pagination
					totalCount={totalCount}
					category={category}
					currentPage={currentPage}
				/>
			);
			const pages = Math.ceil(totalCount / PER_PAGE);

			for (let page = 1; page <= pages; page++) {
				if (page !== currentPage) {
					const pageButton = screen.getByText(page.toString());
					expect(pageButton).not.toHaveClass(
						"bg_accent.default text_accent.fg"
					);
				}
			}
		});
		test("各ページへのリンクが正しいこと", () => {
			render(
				<Pagination
					totalCount={totalCount}
					category={category}
					currentPage={1}
				/>
			);
			const pages = Math.ceil(totalCount / PER_PAGE);
			for (let page = 1; page <= pages; page++) {
				const pageLink = screen.getByText(page.toString()).closest("a");
				expect(pageLink).toHaveAttribute("href", `/${category}/page/${page}`);
			}
		});
	});

	describe("categoryが省略された場合", () => {
		test("正しいページ数が表示されること", () => {
			render(<Pagination totalCount={totalCount} currentPage={1} />);
			const pages = Math.ceil(totalCount / PER_PAGE);
			expect(screen.getAllByRole("button")).toHaveLength(pages);
		});
		test("現在のページが強調表示されること", () => {
			const currentPage = 3;
			render(<Pagination totalCount={totalCount} currentPage={currentPage} />);
			const currentPageButton = screen.getByText(currentPage.toString());
			expect(currentPageButton).toHaveClass("bg_accent.default text_accent.fg");
		});

		test("非現在ページが強調表示されないこと", () => {
			const currentPage = 3;
			render(<Pagination totalCount={totalCount} currentPage={currentPage} />);
			const pages = Math.ceil(totalCount / PER_PAGE);

			for (let page = 1; page <= pages; page++) {
				if (page !== currentPage) {
					const pageButton = screen.getByText(page.toString());
					expect(pageButton).not.toHaveClass(
						"bg_accent.default text_accent.fg"
					);
				}
			}
		});

		test("各ページへのリンクが正しいこと", () => {
			render(<Pagination totalCount={totalCount} currentPage={1} />);
			const pages = Math.ceil(totalCount / PER_PAGE);
			for (let page = 1; page <= pages; page++) {
				const pageLink = screen.getByText(page.toString()).closest("a");
				expect(pageLink).toHaveAttribute("href", `/${category}/page/${page}`);
			}
		});
	});
});
