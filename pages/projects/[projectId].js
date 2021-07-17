import Head from 'next/head'
import LinkExt from '../../components/utils/LinkExt'
import { getProjectDetails } from '../../services/notion'
import Heading from '../../components/utils/Heading'

const ProjectDetailsPage = ({ pageData, blocksData }) => {
	return (
		<>
			<Head>
				<title>{pageData?.project_name || 'project'}</title>
			</Head>
			<div className=''>
				{pageData && (
					<section className=''>
						<Heading type='h1' align='center'>
							{pageData.project_name}
						</Heading>
						<div className='flex flex-col-reverse sm:flex-row justify-between'>
							<div className=''>
								<Heading>Tech Stack</Heading>
								<ul className=''>
									{pageData.tags.map((item) => (
										<li key={item.name + item.color}>{item.name}</li>
									))}
								</ul>
							</div>
							<div className='flex mt-4 gap-4 self-center sm:self-start '>
								<LinkExt
									icon='code'
									href={pageData.github_repo}
									variant='solid'
								>
									Github Repo
								</LinkExt>
								<LinkExt
									icon='online'
									href={pageData.live_demo}
									variant='solid'
								>
									Live demo
								</LinkExt>
							</div>
						</div>

						<div>
							<Heading>Project Details</Heading>
							{blocksData.map((item) => (
								<p className='mt-2' key={item.block_id}>
									{item.text}
								</p>
							))}
						</div>
					</section>
				)}

				{/* <section className='col-span-2'>
				<Heading>Screenshots</Heading>

			</section> */}
			</div>
		</>
	)
}

export default ProjectDetailsPage

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	}
}

export async function getStaticProps({ params }) {
	const { projectId } = params
	let data = null
	try {
		const response = await getProjectDetails(projectId)
		if (response) {
			data = response
		}
	} catch (err) {}

	const { pageData, blocksData } = data

	return {
		props: { pageData, blocksData },
	}
}
