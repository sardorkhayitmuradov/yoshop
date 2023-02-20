/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // InterMedium: ["InterMedium"],
      // InterRegular: ["InterRegular"],
      
      // OverpassRegular: ["OverpassRegular"],
      PoppinsRegular: ["PoppinsRegular"],
      PoppinsSemibold: ["PoppinsSemibold"],
      PoppinsBold: ["PoppinsBold"],

      // PromtLight: ["PromtLight"],
      // PromptRegular: ["PromptRegular"],
      // PromptMedium: ["PromptMedium"],
      // PromptBold: ["PromptBold"],

      // UbuntuRegular: ["UbuntuRegular"],
      // UbuntuMedium: ["UbuntuMedium"],
    },
    extend: {
    },
  },
  plugins: [],
}
