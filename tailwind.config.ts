import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,cjs,mjs,ts,tsx,cts,mts,mdx}",
        "./components/**/*.{js,cjs,mjs,ts,tsx,cts,mts,mdx}",
        "./app/**/*.{js,cjs,mjs,ts,tsx,cts,mts,mdx}",
        "./src/**/*.{js,cjs,mjs,ts,tsx,cts,mts,mdx}",
    ],
    plugins: [],
};
export default config;
