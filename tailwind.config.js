/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./partials/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 20s linear infinite",
            },
            fontFamily: {
                jost: ['"Jost"'],
            },
            aspectRatio: {
                portrait: "9 / 11",
            },
        },
    },
    plugins: [],
};