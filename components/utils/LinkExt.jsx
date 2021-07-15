import {
	CodeIcon,
	StatusOnlineIcon,
	ExternalLinkIcon,
} from '@heroicons/react/outline'

const LinkExt = ({ children, href, icon, variant }) => {
	const styles =
		variant === 'solid'
			? 'bg-primary-light text-white hover:bg-opacity-90 p-2 text-sm sm:text-base'
			: 'text-secondary hover:text-opacity-80 text-sm'

	return (
		<a target='_blank' rel='noreferrer' href={href}>
			<span
				className={`${styles} font-medium font-ibm italic p-1 pr-3 group flex items-center cursor-pointer rounded-md gap-2`}
			>
				<span className='w-6 h-6'>
					{icon === 'code' ? <CodeIcon /> : <StatusOnlineIcon />}
				</span>
				<span className='group-hover:underline'>{children}</span>
				<span className='md:hidden  md:group-hover:inline-block'>
					<ExternalLinkIcon className='w-5 h-5' />
				</span>
			</span>
		</a>
	)
}

export default LinkExt
