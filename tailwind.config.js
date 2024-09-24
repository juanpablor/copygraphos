/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: "#343A40",
        secondary: "#CED4DA",
        light: "#F8F9FA",
        semilight: "#E9ECEF",
        regular: "#ADB5BD",
        semidark: "#6C757D",
        dark: "212529"
      }
    },
  },
  plugins: [],
}
// palette color
// https://coolors.co/palette/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529