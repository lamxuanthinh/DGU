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
      transitionProperty: {
        "stroke-dashoffset": "stroke-dashoffset",
      },
      backgroundImage: {
        "modal-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.74) 7.29%, rgba(0, 0, 0, 0.9) 99.99%, rgba(0, 0, 0, 0) 100%)",
      },
      screens: {
        'zero': '300px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1700px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1900px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
