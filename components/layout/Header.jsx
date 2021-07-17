import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from './Logo'
const links = [
	{
		id: 1,
		href: '/',
		name: 'Home',
	},
	{
		id: 2,
		href: '/projects',
		name: 'Projects',
	},
	{
		id: 3,
		href: '/resume',
		name: 'Resume',
	},
]

const Header = () => {
	const router = useRouter()
	return (
		<header className='w-screen h-full md:h-20 bg-primary  px-8 py-2 flex flex-col md:flex-row gap-2 items-center justify-between mb-4 md:mb-8 '>
			<div className='rounded-lg mt-0 md:mt-2  self-center  md:self-start'>
				<div className=''>
					<Logo />
				</div>
			</div>
			<nav className='text-lightGray md:text-xl text-base font-medium'>
				<ul className='flex gap-6 md:mr-12'>
					{links.map((item) => (
						<li
							key={item.id}
							className={
								item.href == router.asPath
									? `border-b-4 border-secondary`
									: `border-b-4 border-transparent`
							}
						>
							<Link href={item.href}>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
