import MainStyles from "@/styles/layouts/main.module.scss";
import classNames from "classnames";
import Head from "next/head";
import React, { JSX } from "react";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

interface MainLayoutProps {
    title: string;
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }): JSX.Element => {
    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={classNames("flex grow", MainStyles.wrapper)}>
                <main className={classNames("relative z-29 flex grow flex-col", MainStyles.main)}>
                    <HeaderLayout />
                    {children}
                    <FooterLayout />
                </main>
            </div>
        </React.Fragment>
    );
};

export default MainLayout;
