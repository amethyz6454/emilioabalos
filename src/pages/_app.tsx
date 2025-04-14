import "@/styles/globals.scss";
import "@/styles/root.scss";
import type { AppProps } from "next/app";
import { Sofia_Sans } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

const sofiaSans = Sofia_Sans({ subsets: ["latin"] });

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
            <style jsx global>
                {`
                    html {
                        font-family: ${sofiaSans.style.fontFamily};
                    }
                `}
            </style>
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
            </Head>
            <Component {...pageProps} />
        </>
    );
}
