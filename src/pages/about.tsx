import MainLayout from "@/layouts/MainLayout";
import AboutSection from "@/sections/AboutSection";
import { NextPage } from "next";
import { JSX } from "react";

const About: NextPage = (): JSX.Element => {
    return (
        <MainLayout title={("About | " + process.env.NEXT_PUBLIC_APP_NAME) as string}>
            <AboutSection />
        </MainLayout>
    );
};

export default About;
