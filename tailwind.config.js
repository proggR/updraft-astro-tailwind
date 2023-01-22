/** @type {import('tailwindcss').Config} */
module.exports = {
	relative: false,
	content: ["./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts,json}"],
	theme: {
		extend: {
			screens: {
				sm: "400px",
			},
		},
	},
	mode: 'jit',
	plugins: [],
};
