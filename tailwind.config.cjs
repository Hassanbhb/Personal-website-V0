/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'black': '#1d081a',
				'white': '#FAFBFF',
				'orange': '#FE675D',
				'primary': '#edebed',
				'secondary': '#dbd1d9',
				'alt': '#D8D3FB'
			},
			keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
      },
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				fadeIn: 'fadeIn 1.6s ease-in-out forwards',
			},
		},
	},
	plugins: [
		require("tailwindcss-animation-delay")
	],
}
