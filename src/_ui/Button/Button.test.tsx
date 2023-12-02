import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Buttonコンポーネント", () => {
	test("子要素の正しい表示", () => {
		render(<Button>Child Content</Button>);
		expect(screen.getByText("Child Content")).toBeInTheDocument();
	});

	test("クリックイベントの動作", () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);
		fireEvent.click(screen.getByText("Click Me"));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
	test("サイズプロパティ（md）の適用", () => {
		const { container } = render(<Button size="md">Md Button</Button>);
		expect(container.firstChild).toHaveClass("button--size_md"); // pandaのスタイル
	});
});
