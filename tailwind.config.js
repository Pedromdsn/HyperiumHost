module.exports = {
	purge: ["./src/**"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
				Montserrat: ["Montserrat", "sans-serif"],
			},
		},
		screens: {
			"2xl": { max: "1535px" },
			xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" },
		},
	},
	variants: {
		extend: {
			display: ["even"],
		},
	},
	plugins: [],
}
