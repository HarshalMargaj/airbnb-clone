"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
	const router = useRouter();
	return (
		<div>
			<Image
				alt="logo"
				src={"/Logo.png"}
				width={100}
				height={100}
				className="hidden lg:block cursor-pointer"
				onClick={() => router.push("/")}
			/>
			<Image
				alt="logo"
				src={"/shortLogo.webp"}
				width={46}
				height={64}
				className="md:block hidden lg:hidden cursor-pointer"
				onClick={() => router.push("/")}
			/>
		</div>
	);
};

export default Logo;
