import "@/styles/globals.scss";
import "@/styles/root.scss";
import type { AppProps } from "next/app";
import { Sofia_Sans } from "next/font/google";
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
            <Component {...pageProps} />
        </>
    );
}
