import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import NavBar from '@/components/NavBar';
import './globals.css';

const font = Nunito({ subsets: ['latin'] });

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
			<head>
				<script src="https://kit.fontawesome.com/8042553644.js" crossOrigin="anonymous" async></script>
			</head>
			<body className={font.className + 'flex flex-col min-h-screen bg-sky-950'}>
				<NavBar />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
