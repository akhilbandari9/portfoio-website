const colors = require('tailwindcss/colors')
module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: colors.white,
				black: colors.black,
				gray: colors.gray,
				orange: { DEFAULT: '#fc4a1a', 500: '#fc4a1a' },
				secondary: {
					DEFAULT: '#f78733',
				},
				header: '#4abdac',
				primary: {
					light: '#47adb4',
					dark: '#2f6b78',
					darker: '#16384b',
				},
			},
			fontFamily: {
				inter: ['Inter'],
				ibm: ['IBM Plex Mono'],
			},
		},
	},
	variants: {
		extend: {
			display: ['group-hover', 'hover'],
			animation: ['hover', 'focus', 'active'],
			backgroundColor: ['active'],
			opacity: ['active'],
			backgroundOpacity: ['active'],
		},
	},
	plugins: [],
}
