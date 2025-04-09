import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,cjs,mjs,ts,tsx,cts,mts,mdx}",
        "./components/**/*.{js,cjs,mjs,ts,tsx,cts,mts,mdx}",
        "./app/**/*.{js,cjs,mjs,ts,tsx,cts,mts,mdx}",
        "./src/**/*.{js,cjs,mjs,ts,tsx,cts,mts,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#294FBC",
                    50: "#C8D3F3",
                    100: "#AFBFEE",
                    200: "#7D97E3",
                    300: "#4B6FD8",
                    400: "#294FBC",
                    500: "#1E3A8A",
                    600: "#192F71",
                    700: "#132558",
                    800: "#0E1A3F",
                    900: "#081025",
                    950: "#050A19",
                },
                secondary: {
                    DEFAULT: "#9333EA",
                    50: "#F6EEFD",
                    100: "#EBD9FB",
                    200: "#D5B0F7",
                    300: "#BF86F3",
                    400: "#A95DEE",
                    500: "#9333EA",
                    600: "#7A16D4",
                    700: "#5F11A6",
                    800: "#450C78",
                    900: "#2A0849",
                    950: "#1D0532",
                },
                tertiary: {
                    DEFAULT: "#F59E0B",
                    50: "#FDEDD1",
                    100: "#FCE4BB",
                    200: "#FAD38F",
                    300: "#F9C163",
                    400: "#F7B037",
                    500: "#F59E0B",
                    600: "#C57F08",
                    700: "#945F06",
                    800: "#634004",
                    900: "#322002",
                    950: "#191001",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
