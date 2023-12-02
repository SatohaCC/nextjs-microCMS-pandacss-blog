import { Suspense } from "react";
import { siteDescription, siteName } from "../../libs/siteInfo";
import { Box } from "../../styled-system/jsx";
import Header from "./Header";
import Main from "./Main";
import "./globals.css";
import Loading from "./loading";

export const metadata = {
	title: siteName,
	description: siteDescription,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<head />
			<body>
				<Box>
					<Header />
					<Main>
						<Suspense fallback={<Loading />}>{children}</Suspense>
					</Main>
				</Box>
			</body>
		</html>
	);
}
