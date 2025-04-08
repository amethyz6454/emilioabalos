import Head from "next/head";
import React, { JSX } from "react";
import SidebarLayout from "./SidebarLayout";

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
            <SidebarLayout />
            <main className="flex grow flex-col">{children}</main>
        </React.Fragment>
    );
};

export default MainLayout;
