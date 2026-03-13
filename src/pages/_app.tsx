import "@/styles/globals.scss";
import "@/styles/root.scss";
import type { AppProps } from "next/app";
import { Sofia_Sans } from "next/font/google";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

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

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            import("@axe-core/react").then((axe) => {
                axe.default(React, ReactDOM, 1000);
            });
        }
    }, []);

    return (
        <main className={`${sofia.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}
