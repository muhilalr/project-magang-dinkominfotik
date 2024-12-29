/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "hal-1.html",
    "berita.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#32477B",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      keyframes: {
        slider: {
          "0%, 100%": { backgroundImage: "url('/src/img/view-1.jfif')" },
          "30%": { backgroundImage: "url('/src/img/view-2.jfif')" },
          "60%": { backgroundImage: "url('/src/img/view-3.jfif')" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
