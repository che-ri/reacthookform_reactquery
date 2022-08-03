/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "shadow-bottom": "0 10px 10px -10px rgba(33, 35, 38, 0.3)",
            },
            colors: {
                "navy-dark": "#020821",
                navy: "#313955",
                blue: "#689AB7",
                pink: "#C44F77",
                "gray-light": "#f1f1f1",
                gray: "#d9d9d9",
                "gray-dark": "#a9a9a9",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
