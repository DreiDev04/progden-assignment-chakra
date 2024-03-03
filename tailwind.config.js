/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": "426px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors:{
        "background": "#161616",
        "primary": "#1B1B1B",
        "foreground": "#f5f5f5",
        "foreground-defused": "#b3b3b3",
        "foreground-light": "#262626",
        "accent": "#E63E21",
      },

    },
  },
  plugins: [],
}

