import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import { NextPage } from "next";
import { JSX } from "react";

const Home: NextPage = (): JSX.Element => {
    return (
        <MainLayout title="Emilio Abalos">
            <HeroSection />
            <ProjectsSection />
        </MainLayout>
    );
};

export default Home;
