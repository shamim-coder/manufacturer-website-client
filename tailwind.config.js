/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                light: {
                    primary: "#FEBD17",
                    secondary: "#000000",
                    accent: "#37cdbe",
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
