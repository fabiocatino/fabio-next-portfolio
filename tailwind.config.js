module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./public/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateColumns: {
				'3fr': '3fr 2fr',
			},
			screens: {
				'4xsm': '320px',
				'3xsm': '360px',
				xxs: '374px',
				xs: '480px',
			},
			keyframes: {
				fadedown: {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'bounce-in': {
					'0%': { opacity: '0', transform: 'translateX(2000px)' },
					'60%': { opacity: '1', transform: 'translateX(-30px)' },
					'80%': { transform: 'translateX(10px)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				fadedown: 'fadedown 1000ms ease',
				'bounce-in': 'bounce-in 1000ms ease',
			},
			transitionDuration: {
				3000: '3000ms',
			},
			translate: {
				2000: '2000px',
				'--30': '-30px',
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
					'green-transparent': 'rgba(104, 239, 162, 0.2)',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
