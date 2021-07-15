import Link from 'next/link'
import LinkExt from '../utils/LinkExt'
import Heading from '../utils/Heading'

const index = ({ p }) => {
	return (
		<div
			className='w-64 flex flex-col justify-between border border-secondary border-opacity-30 bg-white shadow-md rounded-lg mb-8'
			key={p.page_id}
		>
			<Link href={`/projects/${p.page_id}`}>
				<div className='p-5 cursor-pointer '>
					<header className='mb-4'>
						<div className='flex justify-between items-center border-b border-secondary border-opacity-20 pb-2 mb-3'>
							<Heading type='h3'>{p.project_name}</Heading>
							<div className='h-14 flex-shrink-0 ml-2'>
								<img
									src={`/${p.page_id}/logo.png`}
									alt={p.project_name}
									className='w-14'
								/>
							</div>
						</div>

						{/* <ul className='flex flex-wrap gap-x-2.5 gap-y-2'>
						{p.tags.map((tag) => (
							<li
								key={tag.name + tag.color}
								className={`${
									tag.color === 'default'
										? 'text-gray-500 border-gray-500'
										: `text-${tag.color}-500 border-${tag.color}-500`
								} px-2 text-xs rounded-xl text-white border`}
							>
								{tag.name}
							</li>
						))}
					</ul> */}
					</header>
					<main className='flex-grow mb-2'></main>
				</div>
			</Link>
			<footer className='px-5 py-2'>
				<ul className='flex flex-col text-sm'>
					<li>
						<LinkExt href={p.github_repo} icon='code'>
							Github Repo
						</LinkExt>
					</li>
					<li>
						<LinkExt href={p.live_demo}>Live Demo</LinkExt>
					</li>
				</ul>
			</footer>
		</div>
	)
}

export default index
