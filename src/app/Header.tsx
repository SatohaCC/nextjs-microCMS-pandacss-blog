import { getMenu } from "../../libs/microcms";
import { css } from "../../styled-system/css";
import { Box } from "../../styled-system/jsx";
import DesktopNav from "./_components/DesktopNav";

const Header = async () => {
	const { contents } = await getMenu();
	return (
		<Box
			className={css({
				w: "100%",
				bg: "neutral.50",
				top: 0,
				position: "sticky",
				zIndex: 1,
				borderBottomWidth: "1px",
				borderColor: "gray.200",
				shadow: "xs",
			})}
		>
			<Box>
				<DesktopNav contents={contents} />
			</Box>
		</Box>
	);
};

export default Header;
