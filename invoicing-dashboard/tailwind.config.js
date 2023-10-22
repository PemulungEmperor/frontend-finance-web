/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      mediumBold: 600,
      bold: 700,
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
