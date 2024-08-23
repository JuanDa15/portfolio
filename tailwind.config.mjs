/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'electric-purple': '#9B30FF',
        lavender: '#E6E6FA',
        'deep-purple': '#6A0DAD',
      },
    },
  },
  plugins: [],
};
