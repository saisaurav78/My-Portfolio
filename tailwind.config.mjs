/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '15px'
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1200px'
  	},
  	fontFamily: {
  		primary: 'var(--font-bebas)',
  		secondary: 'var(--font-inter)'
  	},
  	extend: {
  		colors: {
  			primary: '#10151f',
  			secondary: '#475467',
  			accent: {
  				DEFAULT: '#7edad2',
  				hover: '#79d3cc'
  			}
  		},
  		boxShadow: {
  			custom: '0px 14px 54px rgba(0,0,0,0.1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
