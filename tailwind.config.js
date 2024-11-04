// tailwind.config.js
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},

			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},

			keyframes: {
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-in': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
			},

			animation: {
				'fade-in': 'fade-in 0.3s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'slide-in-left': 'slide-in-left 0.3s ease-out',
				'spin-slow': 'spin 2s linear infinite',
			},

			colors: {
				customBlue: '#0929a8',
				customGray: '#808e8a',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};