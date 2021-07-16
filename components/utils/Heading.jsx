const Heading = ({ type, children, align = 'start', ...restProps }) => {
	switch (type) {
		case 'h1':
			return (
				<div className={`flex justify-${align} w-full`}>
					<h1
						className={`md:text-5xl text-4xl my-3 text-secondary font-extralight`}
						{...restProps}
					>
						{children}
					</h1>
				</div>
			)
		case 'h3':
			return (
				<h3
					className='md:text-xl text-lg text-gray-500 font-medium'
					{...restProps}
				>
					{children}
				</h3>
			)
		default:
			return (
				<h2
					className='text-2xl md:text-3xl mt-8 mb-3 text-primary-lighter font-medium pb-1 border-b border-secondary border-opacity-70 inline-block'
					{...restProps}
				>
					{children}
				</h2>
			)
	}
}

export default Heading
