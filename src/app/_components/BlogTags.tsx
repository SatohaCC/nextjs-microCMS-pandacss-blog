import { HStack } from "../../../styled-system/jsx";
import { tagStyle } from "../styles/style";

type BlogTagsType = {
	tags: Array<string>;
};

export const BlogTags = ({ tags }: BlogTagsType) => {
	return (
		<HStack mt="3" mb="3">
			{tags.map((tag, index) => {
				return (
					<button
						key={index}
						className={tagStyle({
							visual: "outline",
						})}
					>
						{tag}
					</button>
				);
			})}
		</HStack>
	);
};
