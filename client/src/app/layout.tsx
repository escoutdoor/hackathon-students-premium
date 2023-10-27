import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--var-montserrat',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer/>
			</body>
		</html>
	)
}
