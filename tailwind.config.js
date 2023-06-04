/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sxl: "1150px",
      },
      width: {
        18: "4.5rem",
      },
      maxWidth: {
        "screen-sxl": "1150px",
      },
      padding: {
        22: "5.5rem",
      },
      margin: {
        15: "3.75rem",
        18: "4.5rem",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        "off-white": "hsl(36, 100%, 99%)",
        "grayish-blue": "hsl(233, 8%, 79%)",
        "very-dark-blue": "hsl(240, 100%, 5%)",
        "dark-grayish-blue": "hsl(236, 13%, 42%)",
        "soft-orange": "hsl(35, 77%, 62%)",
        "soft-red": "hsl(5, 85%, 63%)",
      },
    },
  },
  plugins: [],
};
