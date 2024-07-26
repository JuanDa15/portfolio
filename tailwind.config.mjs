/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'electric-purple': '#9B30FF',
        lavender: '#E6E6FA',
        'deep-purple': '#6A0DAD',
        purple: '#800080',
        'bright-magenta': '#FF00FF',
        orchid: '#DA70D6',
      },
    },
  },
  plugins: [],
};
