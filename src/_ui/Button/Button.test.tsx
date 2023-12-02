import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("ButtonのLabel表示", () => {
	test("solid style", () => {
		render(<Button visual="solid">taro</Button>);
		expect(screen.getByText("taro")).toBeInTheDocument();
	});
	test("outline style", () => {
		render(<Button visual="outline">Tech</Button>);
		expect(screen.getByText("Tech")).toBeInTheDocument();
	});
	test("menu style", () => {
		render(<Button visual="menu">Tech</Button>);
		expect(screen.getByText("Tech")).toBeInTheDocument();
	});
});
