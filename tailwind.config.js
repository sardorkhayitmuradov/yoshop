/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      PoppinsRegular: ["PoppinsRegular"],
      PoppinsSemibold: ["PoppinsSemibold"],
      PoppinsBold: ["PoppinsBold"],
      // InterMedium: ["InterMedium"],
      // InterRegular: ["InterRegular"],

      // OverpassRegular: ["OverpassRegular"],

      // PromtLight: ["PromtLight"],
      // PromptRegular: ["PromptRegular"],
      // PromptMedium: ["PromptMedium"],
      // PromptBold: ["PromptBold"],

      // UbuntuRegular: ["UbuntuRegular"],
      // UbuntuMedium: ["UbuntuMedium"],
    },
    maxWidth: {
      'xs': '450px',
      xl: '1200px',
    },
    screens: {
      'xs': '450px',
      xl: '1200px',
    },
    extend: {
    },
  },
  plugins: [],
};
