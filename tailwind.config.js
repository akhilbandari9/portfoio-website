const colors = require('tailwindcss/colors')
module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				secondary: {
					DEFAULT: '#FCA311',
				},
				lightGray: { DEFAULT: '#C1C4CC' },
				primary: {
					lighter: '#868D9C',
					light: '#4E586E',
					DEFAULT: '#14213d',
					dark: '#121E37',
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
