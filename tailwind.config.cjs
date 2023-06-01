/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'black': '#241023',
				'white': '#FAFBFF',
				'orange': '#FE675D',
				'dark-blue': '#33658A',
				'light-blue': '#D8D3FB',
			}
		},
	},
	plugins: [],
}
