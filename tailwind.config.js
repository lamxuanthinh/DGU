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
        "menu": "0px 4px 16px rgba(0, 0, 0, 0.12)"
      },
      backgroundImage: {
        "modal-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.74) 7.29%, rgba(0, 0, 0, 0.9) 99.99%, rgba(0, 0, 0, 0) 100%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
