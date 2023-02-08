/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				main: "url('/public/images/bg1.jpg')",
				about1: "url('/public/images/about1.jpg')",
				about2: "url('/public/images/about2.jpg')"
			}
		}
	},
	plugins: []
};
