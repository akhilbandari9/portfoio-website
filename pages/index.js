import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Akhil Bandari</title>
			</Head>
			<main>
				<div className='grid place-items-center' style={{ height: '85vh' }}>
					<div className='flex flex-col items-start'>
						<h1 className='text-5xl md:text-7xl font-bold flex flex-col gap-4'>
							<span className='font-ibm text-lg md:text-xl text-secondary'>
								Hi, my name is
							</span>
							<span className='text-primary-dark mt-2'>
								Akhil Bandari<span className='text-secondary'>.</span>{' '}
							</span>
							<span className='text-primary-light'>
								I build things for the web.
							</span>
						</h1>
						<div className='md:w-1/2 my-4 md:my-8 text-base md:text-lg'>
							I build fast and high performat web applications with{' '}
							<span className='underline'>Javascript and ReactJs</span> . I am
							currently looking for a fulltime postion as Front End Development.
						</div>
						<a
							href='mailto:akhilbandari9999@gmail.com?'
							target='_blank'
							className='py-4 px-8 bg-secondary active:bg-opacity-80 text-white font-bold self-end md:self-start'
						>
							Contact Me
						</a>
					</div>
				</div>
			</main>
		</>
	)
}
