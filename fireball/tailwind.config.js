/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                phone: { max: "425px" },
                tablet: "426px",
                desktop: "769px",
            },
        },
    },
    plugins: [],
};
