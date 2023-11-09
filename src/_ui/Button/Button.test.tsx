import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Labelの表示", () => {
	render(
		<Button variant="solid" size="md">
			taro
		</Button>
	);
	expect(screen.getByText("taro")).toBeInTheDocument();
});
