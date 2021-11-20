module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				'xs': '0px',
			},
			colors: {
				navy: {
					light: '#112240',
					DEFAULT: '#0a192f',
					dark: '#020c1b',
					lightest_navy: '#233554',
					header: 'rgba(10, 25, 47, 0.85)',
					shadow: 'rgba(2,12,27,0.7)',
				},
				slate: {
					light: '#a8b2d1',
					DEFAULT: '#8892b0',
					lightest: '#ccd6f6',
				},
				custom: {
					white: ' #e6f1ff',
					green: '#64ffda',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
