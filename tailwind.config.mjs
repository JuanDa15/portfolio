/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-blue': '#1E90FF',
        'sky-blue': '#87CEEB',
        'dodger-blue': '#1E90FF',
        cyan: '#00FFFF',
        'deep-sky-blue': '#00BFFF',
        'light-blue': '#ADD8E6',
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
