"use client";

import Button from "@/_ui/Button/Button";
import { useRouter } from "next/navigation";

const BackBtn = () => {
	const router = useRouter();
	return <Button onClick={() => router.back()}>戻る</Button>;
};

export default BackBtn;
