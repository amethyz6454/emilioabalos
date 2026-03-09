import "@/styles/globals.scss";
import "@/styles/root.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
    // useEffects
    useEffect(() => {
        const appLoader = document.querySelector("#appLoader");
        if (appLoader) {
            appLoader.remove();
        }
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Emilio Abalos's portfolio showcasing web design and front-end development projects. View my work and contact me for collaborations."
                />
                <meta property="og:title" content="Emilio Abalos" />
                <meta
                    property="og:description"
                    content="Emilio Abalos's portfolio showcasing web design and front-end development projects. View my work and contact me for collaborations."
                />
                <meta property="og:image" content="/thumbnail.jpg" />
                <meta property="og:url" content="https://emilioabalos.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Emilio Abalos" />
                <meta
                    name="twitter:description"
                    content="Emilio Abalos's portfolio showcasing web design and front-end development projects. View my work and contact me for collaborations."
                />
                <meta name="twitter:image" content="/thumbnail.jpg" />
                <link rel="icon" href="/app-logo.png" as="image" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
