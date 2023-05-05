import "@/styles/globals.css";
import { clsx } from "clsx";

export const metadata = {
	title: "Dictionary Web App",
	description: "Front end mentor challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={clsx("html", "h-[100vh] overflow-y-scroll text-[62.5%]")}>
			<body
				className={clsx("body", "w-max-full h-full bg-primary-100 !m-0", "dark:bg-primary-800")}
			>
				{children}
			</body>
		</html>
	);
}
