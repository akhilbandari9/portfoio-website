import Image from 'next/image'
const Logo = () => {
	return (
		<div className='w-16 md:w-24 h-16 md:h-24 md:p-2'>
			<Image
				width={100}
				height={100}
				src='/logo_main.png'
				alt='Akhil Bandari'
			/>
		</div>
	)
}

export default Logo
