/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Inter", "Sans Serif"],
                title: ["Inter", "Sans Serif"]
            },
            fontSize: {
                body: [
                    "1rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                h1: [
                    "3.5rem",
                    {
                        lineHeight: "3.75rem"
                    }
                ],
                h2: [
                    "2.25rem",
                    {
                        lineHeight: "2.625rem"
                    }
                ],
                h3: [
                    "1.875rem",
                    {
                        lineHeight: "2.25rem"
                    }
                ],
                h4: [
                    "1.5rem",
                    {
                        lineHeight: "2rem"
                    }
                ],
                h5: [
                    "1.25rem",
                    {
                        lineHeight: "1.75rem"
                    }
                ],
                h6: [
                    "1.125rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                mini: [
                    "0.75rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ]
            },
            colors: {
                black: {
                    DEFAULT: "#000000",
                    50: "#E6E6E6",
                    100: "#CCCCCC",
                    200: "#999999",
                    300: "#666666",
                    400: "#333333",
                    500: "#000000",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000"
                },
                white: {
                    DEFAULT: "#FFFFFF",
                    50: "#FFFFFF",
                    100: "#FCFCFC",
                    200: "#FCFCFC",
                    300: "#FAFAFA",
                    400: "#FAFAFA",
                    500: "#F7F7F7",
                    600: "#C7C7C7",
                    700: "#949494",
                    800: "#636363",
                    900: "#303030"
                },
                primary: {
                    50: "#FCFCFC",
                    100: "#FCFCFC",
                    200: "#FCFCFC",
                    300: "#FCFCFC",
                    400: "#FAFAFA",
                    500: "#FAFAFA",
                    600: "#E3E3E3",
                    700: "#C7C7C7",
                    800: "#A6A6A6",
                    900: "#787878",
                    950: "#595959"
                },
                secondary: {
                    50: "#ff8080",
                    100: "#ff6666",
                    200: "#ff4d4d",
                    300: "#ff3333",
                    400: "#ff1a1a",
                    500: "#ff0000",
                    600: "#e60000",
                    700: "#cc0000",
                    800: "#b30000",
                    900: "#990000",
                    950: "#800000"
                },
                badge: "#F1F5F9",
                badgeText: "#475569"
            }
        }
    },
    plugins: [require("@tailwindcss/typography")]
};
