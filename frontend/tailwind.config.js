/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0D0D0D',
        'dark-secondary': '#0F0F0F',
        'dark-card': '#151515',
        'dark-hover': '#1F1F1F',
        'neon-blue': '#4F8CFF',
        'neon-purple': '#7A5CFF',
        'text-white': '#FFFFFF',
        'text-gray': '#C9C9C9',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'neon-sm': '0 0 4px rgba(79, 140, 255, 0.15)',
        'neon-md': '0 0 8px rgba(79, 140, 255, 0.25)',
        'neon-lg': '0 0 12px rgba(79, 140, 255, 0.35)',
      },
    },
  },
  plugins: [],
}
