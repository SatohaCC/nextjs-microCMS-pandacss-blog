import { Divider } from "../../../styled-system/jsx";
import AboutMe from "./_components/AboutMe";
import Portfolios from "./_components/Portfolios";
import Qualifications from "./_components/Qualifications";

const page = () => {
	return (
		<div>
			<AboutMe />
			<Divider color="gray.200" pb="3" />
			<Qualifications />
			<Divider color="gray.200" pb="3" />
			<Portfolios />
		</div>
	);
};

export default page;
