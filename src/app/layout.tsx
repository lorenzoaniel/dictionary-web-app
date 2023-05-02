import "@/styles/globals.css";

export const metadata = {
	title: "Dictionary Web App",
	description: "Front end mentor challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
