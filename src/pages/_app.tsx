import "@/styles/globals.scss";
import "@/styles/root.scss";
import type { AppProps } from "next/app";
import { Sofia_Sans } from "next/font/google";
import { useEffect } from "react";

const sofia = Sofia_Sans({
    subsets: ["latin"],
    variable: "--font-sofia-sans",
});

export default function App({ Component, pageProps }: AppProps) {
    // useEffects
    useEffect(() => {
        const appLoader = document.querySelector("#appLoader");
        if (appLoader) {
            appLoader.remove();
        }
    }, []);

    return (
        <main className={`${sofia.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}
