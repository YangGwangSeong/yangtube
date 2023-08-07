/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#F4003F',
			},
			keyframes: {
				fade: {
					form: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
			scaleIn: {
				'0%': {
					opacity: 0,
					transform: 'scale(0.9)',
				},
				'50%': {
					opacity: 0.3,
				},
				'100%': {
					opacity: 1,
					transform: 'scale(1)',
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme }) => {
			addComponents({
				'.shadow-block': {
					display: 'block',
					boxShadow: theme('boxShadow.lg'),
					padding: theme('padding.4'),
					animation: theme('animation.scaleIn'),
					backgroundColor: theme('backgroundColor.white'),
				},
			});
		}),
	],
};
