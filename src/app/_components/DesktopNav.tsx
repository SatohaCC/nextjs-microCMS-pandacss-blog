import Link from "next/link";
import { siteName } from "../../../libs/siteInfo";
import { Box, Flex } from "../../../styled-system/jsx";
import { flex } from "../../../styled-system/patterns";
import { menuButton } from "../styles/style";

const DesktopNav = ({ contents }: any) => {
	return (
		<Flex
			maxW="1280px"
			margin="0 auto"
			justifyContent={{ base: "space-between" }}
			alignItems="baseline"
		>
			<Box>
				<Link href={"/"}>
					<button
						className={menuButton({
							visual: "text",
							size: "lg",
						})}
					>
						{siteName}
					</button>
				</Link>
			</Box>
			<Box display={{ base: "none", md: "contents" }}>
				<div className={flex({ gap: 6 })}>
					{contents.map((menu: any) => {
						return (
							<Link key={menu.id} href={`/${menu.id}/page/1`}>
								<button
									key={menu.id}
									className={menuButton({ visual: "text", size: "md" })}
								>
									{menu.label}
								</button>
							</Link>
						);
					})}
				</div>
			</Box>
			<Box>
				<Link href={"/about"}>
					<button className={menuButton({ visual: "text", size: "md" })}>
						Profile
					</button>
				</Link>
			</Box>
		</Flex>
	);
};

export default DesktopNav;
