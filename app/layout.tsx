import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Caio Hygino Software',
	description: 'My Web Developer Portfolio',
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className={rubik.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
