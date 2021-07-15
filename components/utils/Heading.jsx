const Heading = ({ type, children, align = '', ...restProps }) => {
	switch (type) {
		case 'h1':
			return (
				<div className={`flex mx-auto justify-${align}`}>
					<h1
						className={`md:text-5xl text-4xl my-3 text-primary-dark font-extralight pb-1.5 border-b-4 border-secondary`}
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
					className='text-2xl md:text-3xl mt-8 mb-3 text-primary-dark font-medium pb-1 border-b border-secondary inline-block'
					{...restProps}
				>
					{children}
				</h2>
			)
	}
}

export default Heading
