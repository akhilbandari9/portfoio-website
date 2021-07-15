import Head from 'next/head'
import Header from './Header'
const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link
					rel='icon'
					href='/logo_main.png'
					type='image/gif'
					sizes='16x16'
				></link>
			</Head>
			<div className='font-inter text-primary-darker text-base font-medium'>
				<Header />
				<main className='max-w-screen-lg mx-auto px-2 md:px-4'>{children}</main>
			</div>
		</>
	)
}

export default Layout
