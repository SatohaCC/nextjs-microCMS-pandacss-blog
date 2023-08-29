"use client";

import { useRouter } from "next/navigation";
import { button } from "../styles/style";

const BackBtn = () => {
	const router = useRouter();
	return (
		<button
			className={button({ visual: "solid", size: "sm" })}
			onClick={() => router.back()}
		>
			戻る
		</button>
	);
};

export default BackBtn;
