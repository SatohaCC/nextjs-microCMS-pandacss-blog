import { FaGithub, FaTwitter } from "react-icons/fa";
import { iconsProps } from "../../../../types/types";

export const aboutData = [
	{
		id: 1,
		text: "Qiita書くレベルじゃないのでアウトプットする用にブログ作ってみました。",
	},
	{
		id: 2,
		text: "Next.js楽しい！",
	},
	{
		id: 3,
		text: "GitHubはPrivateばっかり。",
	},
	{
		id: 4,
		text: "薬の勉強をしていました",
	},
];

export const iconsData: iconsProps[] = [
	{
		id: 1,
		title: "twitter",
		url: "https://twitter.com/SatohaCC",
		icon: <FaTwitter />,
	},
	{
		id: 2,
		title: "github",
		url: "https://github.com/SatohaCC",
		icon: <FaGithub />,
	},
];
