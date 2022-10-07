/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				Main: ["Poppins", "sans-serif"],
				Montserrat: ["Montserrat", "sans-serif"]
			},
			screens: {
				"3xl": { max: "1601px" },
				"2xl": { max: "1535px" },
				xl: { max: "1279px" },
				lg: { max: "1023px" },
				md: { max: "767px" },
				sm: { max: "639px" }
			},

			colors: {
				"cinza-500": "#14121d",
				"cinza-400": "#1d1a2c",
				"cinza-200": "#00000023",
				"cinza-100": "#282438"
			}
		}
	},

	plugins: []
}
