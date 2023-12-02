import { grid } from "../../../../styled-system/patterns";
import { qualificationsData } from "../../../_data/qualificationsData";
import { boxStyle, headStyle } from "./styles/style";

const Qualifications = () => {
	return (
		<div className={boxStyle}>
			<h2 className={headStyle}>資格</h2>
			<div className={grid({ columns: 2, gap: "1" })}>
				{qualificationsData.map((data, index) => {
					return <p key={index}>{data.text}</p>;
				})}
			</div>
		</div>
	);
};

export default Qualifications;
