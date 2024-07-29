/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				yeon: ['Yeon Sung', 'sans-serif'],
				abz: ['Abeezee', 'sans-serif'],
			},
			colors: {
				'primary': '#bf0020', // Rojo
				'primary-darker': '#960019',
				'dark': '#16161a', // Negro
				'light': '#f8f2f2', // Blanco
				'darker': '#131316', // Negro Negro
				'gray': '#20242B', // Gris (fondo tarjta)
				'light-blue': '#8790A0', // Azulado extraño
				'drown-gray': '#8B8B8B', // Gris apagado
				'transparent': 'transparent',
			},
			borderRadius: {
				'input': '0.25rem',
				'button': '0.625rem',
			},
		},
	},
	plugins: [],
}
