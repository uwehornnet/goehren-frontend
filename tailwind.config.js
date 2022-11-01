/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./partials/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			tablet: "780px",
			laptop: "1024px",
			desktop: "1320px",
		},
		extend: {
			animation: {
				"spin-slow": "spin 20s linear infinite",
			},
			fontFamily: {
				jost: ['"Jost"'],
			},
			aspectRatio: {
				portrait: "9 / 11",
				video: "16 / 9",
				banner: "16 / 6",
			},
		},
	},
	plugins: [],
};
