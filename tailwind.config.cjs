/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			'display': ['Manrope'],
			'body': ['Manrope']
		},
		extend: {
			colors: {
				'secondary': "#2B2D42",
			}
		}
	},

	plugins: []
};

module.exports = config;
