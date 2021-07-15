import Head from 'next/head'
import { getProjects } from '../../services/notion'
import Card from '../../components/card'
import Heading from '../../components/utils/Heading'

const ProjectsPage = ({ projects }) => {
	if (projects === null) return <p>Loading...</p>
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<div>
				<Heading align='center' type='h1'>
					Projects
				</Heading>
				<div className='flex flex-wrap justify-evenly mt-8'>
					{projects.map((p) => (
						<Card key={p.page_id} p={p} />
					))}
				</div>
			</div>
		</>
	)
}

export default ProjectsPage

export async function getStaticProps() {
	const projects = await getProjects()
	return {
		props: { projects },
	}
}
