import Image from 'next/image'

const SkillCard = ({ name }) => {
	return (
		<div className='w-32 md:w-40 bg-lightGray border border-primary-light bg-opacity-10 md:hover:bg-opacity-5  md:p-4 p-2 flex flex-col items-center gap-2'>
			<Image width={80} height={80} src={`/icons/${name}.png`} alt={name} />
			<p className='uppercase text-primary-lighter font-semibold text-lg'>
				{name}
			</p>
		</div>
	)
}

export default SkillCard
