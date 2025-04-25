import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const Nunito = Nunito_Sans({
	subsets: ['latin'],
})

export const metadata = {
	title: 'Github Profile Search',
	description: 'Procure seu perfil do github',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pt-br'>
			<body
				className={`${Nunito.className} antialiased h-screen w-screen flex relative overflow-hidden`}
			>
				<div className='absolute -z-10 top-1/12 left-1/10'>
					<img src='dots.svg' alt='dots' />
				</div>
				<div
					className='bg-radial-[50%_50%_at_50%_50%,#005CFF_0%,rbga(0,0,0,0)_100%] size-[42.125rem] absolute -left-1/5 top-1/4 -z-10'
					style={{
						background:
							'radial-gradient(50% 50% at 50% 50%, #005CFF 0%, rgba(0, 0, 0, 0) 100%)',
					}}
				/>
				<div
					className='bg-radial-[50%_50%_at_50%_50%,#005CFF_0%,rbga(0,0,0,0)_100%] size-[55.5rem] absolute left-3/5 -top-1/3 -z-10'
					style={{
						background:
							'radial-gradient(50% 50% at 50% 50%, #005CFF 0%, rgba(0, 0, 0, 0) 100%)',
					}}
				/>
				<div className='max-w-[72.25rem] w-full min-h-[33.5rem] bg-black m-auto flex flex-col px-4 lg:px-0'>
					{children}
				</div>
			</body>
		</html>
	)
}
