import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/navbar/Navbar";
import RegisterModal from "./_components/modals/RegisterModal";

export const metadata: Metadata = {
	title: "Airbnb",
	description: "Airbnb clone",
};

const font = Nunito({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<RegisterModal />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
