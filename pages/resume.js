import Head from 'next/head'
import { DocumentDownloadIcon } from '@heroicons/react/outline'

const Resume = () => {
	return (
		<>
			<Head>
				<title>Resume</title>
			</Head>
			<div className='flex justify-end'>
				<a
					className='mb-2 bg-secondary text-white px-4 py-2 flex gap-2 rounded-lg justify-center items-center group'
					href='/resume.pdf'
					rel='noreferrer'
					download
				>
					<span>
						<DocumentDownloadIcon className='w-6 h-6' />
					</span>
					<span className='group-hover:underline'>Download</span>
				</a>
			</div>

			<div className='h-screen overflow-x-hidden'>
				<embed
					className='h-full w-full '
					type='application/pdf'
					src='/resume.pdf'
				></embed>
			</div>
		</>
	)
}

export default Resume
