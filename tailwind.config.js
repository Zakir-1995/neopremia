/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        yellow: "#fabe00",
        megenta: "#9900cc",
        blackTwo: "#27272a",
        graybg:"#f4f4fc"
      },
    },
  },
  plugins: [],
};
