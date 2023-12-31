/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#191919",
          aside: "#202020",
          border: "#373737",
          textMenu: "#9B9B9B",
        },
        light: {
          bg: "#FFFFFF",
          aside: "#FBFBFA",
          border: "#E1E1E1",
          textMenu: "#6D6C68",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
}
