/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "4px",
    },
    extend: {
      colors: {
        theme1: "#fafafa",
        theme2: "#fde68a",
        theme3: "#171717",
      },
    },
    screen: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
