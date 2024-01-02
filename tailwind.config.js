/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "card-color": "#3D0000",
        "button-color": "#FF0000",
      },
    },
  },
  plugins: [],
};
