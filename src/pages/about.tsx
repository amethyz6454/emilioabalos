import MainLayout from "@/layouts/MainLayout";
import AboutSection from "@/sections/AboutSection";
import { NextPage } from "next";
import { JSX } from "react";

const About: NextPage = (): JSX.Element => {
    return (
        <MainLayout title="About | Emilio Abalos">
            <AboutSection />
        </MainLayout>
    );
};

export default About;
