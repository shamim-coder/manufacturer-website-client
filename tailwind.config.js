/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    primary: "#FEBD17",
                    secondary: "#1B1B1B",
                    accent: "#9c9c9c",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                    "--rounded-btn": "none",
                },
                dark: {
                    primary: "#FEBD17",
                    secondary: "#000000",
                    accent: "#37cdbe",
                    neutral: "#3d4451",
                    "base-100": "#32353E",
                    "--rounded-btn": "none",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
