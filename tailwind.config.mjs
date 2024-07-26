/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				orbit: "orbit calc(var(--duration)*1s) linear infinite",
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
			},
			keyframes: {
				orbit: {
					"0%": {
						transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
					},
				},
			},

		},
	},
	plugins: [],
}
