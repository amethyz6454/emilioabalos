import MainStyles from "@/styles/layouts/main.module.scss";
import classNames from "classnames";
import Head from "next/head";
import React, { JSX } from "react";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";
import SidebarLayout from "./SidebarLayout";
import { useRouter } from "next/router";

interface MainLayoutProps {
    title: string;
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }): JSX.Element => {
    const router = useRouter();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const seo = {
        title: "Emilio Abalos",
        description:
            "Emilio Abalos's portfolio showcasing web design and front-end development projects. View my work and contact me for collaborations.",
        image: `${appUrl}/thumbnail.jpg`,
        url: `${appUrl}${router.asPath}`,
        type: "website",
        siteName: "Emilio Abalos",
        twitterCard: "summary_large_image",
        twitterTitle: "Emilio Abalos",
        twitterDescription: "@emiliosabalos",
    };

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content={seo.description} />

                {/* Open Graph / Facebook */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:url" content={seo.url} />
                <meta property="og:site_name" content={seo.title} />
                <meta property="og:updated_time" content={new Date().toISOString()} />
                <meta property="og:image" content={seo.image} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:url" content={seo.url} />
                <meta name="twitter:image" content={seo.image} />
                <meta name="twitter:site" content={seo.twitterCard} />
                <meta name="twitter:creator" content={seo.twitterCard} />

                <link rel="icon" href="/app-logo.png" as="image" />
            </Head>
            <div className={classNames("flex grow", MainStyles.wrapper)}>
                <SidebarLayout />

                <main className={classNames("flex grow flex-col", MainStyles.main)}>
                    <HeaderLayout />
                    {children}
                    <FooterLayout />
                </main>
            </div>
        </React.Fragment>
    );
};

export default MainLayout;
