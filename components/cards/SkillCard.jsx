import Image from 'next/image'

const SkillCard = ({ name }) => {
	return (
		<div className='w-40 bg-lightGray border border-primary-light bg-opacity-10 hover:bg-opacity-5 p-4 flex flex-col items-center gap-2 rounded-xl'>
			<Image width={80} height={80} src={`/icons/${name}.png`} />
			<p className='uppercase text-primary-lighter font-semibold text-lg'>
				{name}
			</p>
		</div>
	)
}

export default SkillCard
