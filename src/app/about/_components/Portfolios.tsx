import { portfolioData } from "../data/portfolioData";
import { boxStyle, headStyle } from "../styles/style";
import PortfolioRow from "./PortfolioRow";

const Portfolios = () => {
	return (
		<div className={boxStyle}>
			<h2 className={headStyle}>Portfolios</h2>
			<div>
				{portfolioData.map((data, index) => {
					return <PortfolioRow key={index} data={data} />;
				})}
			</div>
		</div>
	);
};

export default Portfolios;
