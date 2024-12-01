import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar/Navbar";

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
				<Navbar />
				{children}
			</body>
		</html>
	);
}
