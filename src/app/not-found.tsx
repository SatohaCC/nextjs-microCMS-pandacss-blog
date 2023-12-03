import Link from "next/link";
import { css } from "../../styled-system/css";
import { Box } from "../../styled-system/jsx";
import Button from "../_ui/Button/Button";

const nameStyle = css({
	color: "accent.default",
});

const NotFound = () => {
	return (
		<Box textAlign="center" py={10} px={6}>
			<h1 className={nameStyle}>404</h1>
			<h2 className={nameStyle}>Page Not Found</h2>
			<p className={nameStyle}>
				The page you&apos;re looking for does not seem to exist
			</p>
			<div className={css({ padding: "4" })} />
			<Link href={"/"}>
				<Button variant="solid">Go to Home</Button>
			</Link>
		</Box>
	);
};

export default NotFound;
