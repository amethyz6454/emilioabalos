import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                <style>
                    {`#appLoader { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #2a2b33; z-index: 9999; } .loader-content { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: grid; place-items: center; }`}
                </style>
            </Head>
            <body className="bg-gray-50 antialiased dark:bg-gray-900">
                <div id="appLoader">
                    <div className="loader-content">
                        <Image
                            priority
                            alt={process.env.NEXT_PUBLIC_APP_NAME as string}
                            src="/app-logo.svg"
                            width={144}
                            height={144}
                        />
                    </div>
                </div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
