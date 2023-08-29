import "./globals.css";

import { Suspense } from "react";
import { siteName } from "../../libs/siteInfo";
import { Box } from "../../styled-system/jsx";
import Header from "./Header";
import Main from "./Main";
import Loading from "./loading";

export const metadata = {
	title: siteName,
	description: "Satoha's Blog:Tech,Medical,Life",
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
