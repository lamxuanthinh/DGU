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
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#7FCFFC",
            },
            keyframes: {
                pulseCustom: {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(0.9)" },
                    "100%": { transform: "scale(1)" },
                },
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            animation: {
                pulseCustom: "pulse 0.1s ease-in-out",
                falseIn: "fadeIn 0.3s ease-in-out",
            },
            boxShadow: {
                "inset-white": "0 0 0px 1000px white inset",
                menu: "0px 4px 16px rgba(0, 0, 0, 0.12)",
                darkMenu: "0px 3px 16px rgba(255, 255, 255, 0.1)",
                softGlow: "0 5px 15px 0 rgba(0,0,0,.3)",
                cardUploadVideo: "5px 5px 4px 0px rgba(127, 207, 252, 0.25)",
            },
            transitionProperty: {
                "stroke-dashoffset": "stroke-dashoffset",
            },
            backgroundImage: {
                "modal-gradient":
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.74) 7.29%, rgba(0, 0, 0, 0.9) 99.99%, rgba(0, 0, 0, 0) 100%)",
                "upload-video":
                    "linear-gradient(139deg, rgba(225, 244, 255, 0.65) 8.55%, rgba(255, 255, 255, 0.09) 29.97%, rgba(229, 239, 255, 0.64) 50.65%, rgba(255, 255, 255, 0.64) 65.08%, rgba(254, 254, 255, 0.27) 78.54%, rgba(0, 163, 255, 0.07) 100.85%)",
            },
            screens: {
                zero: "300px",

                sm: "640px",
                // => @media (min-width: 640px) { ... }

                md: "768px",
                // => @media (min-width: 768px) { ... }

                lg: "1024px",
                // => @media (min-width: 1024px) { ... }

                xl: "1280px",
                // => @media (min-width: 1280px) { ... }

                "2xl": "1700px",
                // => @media (min-width: 1536px) { ... }

                "3xl": "1900px",
                // => @media (min-width: 1536px) { ... }
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
