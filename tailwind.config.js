/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Views/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inset-white": "0 0 0px 1000px white inset",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: 0, transform: "rotate(15deg)" },
          "100%": { opacity: 1 },
        },
        spinLeftAnimation: {
          "0%": {
            transform: "rotate(45deg)",
            left: "0%",
            opacity: 0,
          },
          "10%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(0)",
            left: "60%",
          },
        },
        slideToRight: {
          "0%": {
            left: "-20%",
            opacity: 0,
          },
          "10%": {
            opacity: 1,
          },
          "100%": {
            left: "15%",
          },
        },
        spinRightAnimation: {
          "0%": {
            transform: "rotate(-90deg)",
            left: "-20%",
            opacity: 0,
          },
          "10%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(0)",
            left: "5%",
          },
        },
        spinLeftBottomAnimation: {
          "0%": {
            transform: "rotate(-90deg)",
            left: "-20%",
            opacity: 0,
          },
          "10%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(0)",
            left: "70%",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out forwards",
        spinLeftAnimation: "spinLeftAnimation 1s ease-in-out forwards",
        slideToRight: "slideToRight 1s ease-in-out forwards",
        spinRightAnimation: "spinRightAnimation 1s ease-in-out forwards",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        spinLeftBottomAnimation:
          "spinLeftBottomAnimation 1s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
