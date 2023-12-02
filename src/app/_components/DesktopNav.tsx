import Link from "next/link";
import { siteName } from "../../../libs/siteInfo";
import { ParentCategoriesEntity } from "../../../libs/types";
import { Box, Flex } from "../../../styled-system/jsx";
import { flex } from "../../../styled-system/patterns";
import Button from "../../_ui/Button/Button";

type Props = {
	contents: ParentCategoriesEntity[];
};

const DesktopNav = ({ contents }: Props) => {
	return (
		<Flex
			maxW="1280px"
			margin="0 auto"
			justifyContent={{ base: "space-between" }}
			alignItems="baseline"
		>
			<Box>
				<Link href={"/"}>
					<Button visual="menu" size="2xl">
						{siteName}
					</Button>
				</Link>
			</Box>
			<Box display={{ base: "none", md: "contents" }}>
				<div className={flex({ gap: 6 })}>
					{contents.map((menu) => {
						return (
							<Link key={menu.id} href={`/${menu.id}/page/1`}>
								<Button key={menu.id} visual="menu" size="xl">
									{menu.label}
								</Button>
							</Link>
						);
					})}
				</div>
			</Box>
			<Box>
				<Link href={"/about"}>
					<Button visual="menu" size="xl">
						Profile
					</Button>
				</Link>
			</Box>
		</Flex>
	);
};

export default DesktopNav;
