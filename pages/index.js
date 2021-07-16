import Head from 'next/head'
import Link from 'next/link'
import SkillCard from '../components/cards/SkillCard'
import Heading from '../components/utils/Heading'
import skills from './skills.json'
export default function Home() {
	return (
		<>
			<Head>
				<title>Akhil Bandari</title>
			</Head>
			<main>
				{/* HERO */}
				<section
					className='grid md:place-items-center mx-4 md:mx-0'
					style={{ height: '90vh' }}
				>
					<div className='flex flex-col items-start'>
						<h1 className='text-5xl md:text-7xl font-bold flex flex-col gap-4 mt-4 md:mt-0'>
							<span className='font-ibm text-lg md:text-xl text-secondary'>
								Hi, my name is
							</span>
							<span className='text-primary-lighter mt-2'>
								Akhil Bandari<span className='text-secondary'>.</span>{' '}
							</span>
							<span className='text-primary-light'>
								I build things for the web.
							</span>
						</h1>
						<div className='md:w-1/2 my-6 md:my-8 text-base md:text-lg'>
							I build fast and high performat web applications with{' '}
							<span className='underline'>Javascript and ReactJs</span> . I am
							currently looking for a fulltime postion as Front End Development.
						</div>
						<div className='flex gap-4 justify-between items-center self-end md:self-start'>
							<a
								href='mailto:akhilbandari9999@gmail.com?'
								target='_blank'
								rel='noreferrer'
								className='py-3 md:py-4 px-6 md:px-8 bg-secondary border-2 border-secondary active:bg-opacity-80 text-primary-dark font-bold '
							>
								Contact Me
							</a>
							<Link href='/projects' passHref>
								<span className='py-3 md:py-4 px-6 md:px-8 border-2 text-secondary border-secondary font-bold cursor-pointer'>
									Projects
								</span>
							</Link>
						</div>
					</div>
				</section>
				<section className='mt-8 mx-4 md:mx-0'>
					<Heading type='h1' align='center'>
						Skills
					</Heading>
					<div className='flex flex-wrap justify-center gap-10 mt-8'>
						{skills.map((item) => (
							<SkillCard key={item} name={item} />
						))}
					</div>
				</section>
				<section className='mt-8 mx-4 md:mx-0'></section>
			</main>
		</>
	)
}
