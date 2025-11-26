/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#FFE5D9',
        lavender: '#E8D5FF',
        teal: '#B8E6D4',
        sage: '#A8C8A0',
        lilac: '#D4C5F9',
        blush: '#F5D0C8',
        blue: '#3B82F6',
        sky: '#60A5FA',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Sora', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

