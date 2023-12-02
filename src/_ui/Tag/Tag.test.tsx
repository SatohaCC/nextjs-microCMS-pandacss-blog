import { render, screen } from "@testing-library/react";
import Tag from "./Tag";

describe("TagのLabel表示", () => {
	test("outline style", () => {
		render(<Tag visual="outline">taro</Tag>);
		expect(screen.getByText("taro")).toBeInTheDocument();
	});

	test("outline style 2", () => {
		render(<Tag visual="outline">Tech</Tag>);
		expect(screen.getByText("Tech")).toBeInTheDocument();
	});
});
