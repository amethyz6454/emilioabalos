import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
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
