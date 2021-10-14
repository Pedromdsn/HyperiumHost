module.exports = {
	mode: 'jit',
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
			"3xl": { max: "1601px" },
			"2xl": { max: "1535px" },
			xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" },
		},
	},
	variants: {
		extend: {
			height: ["hover", "focus"],
			width: ["hover", "focus"],
			display: ["even"],
		},
	},
	plugins: [],
}
