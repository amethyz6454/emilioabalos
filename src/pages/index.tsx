import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContainerStyle from "@/styles/components/container.module.scss";
import { NextPage } from "next";
import { JSX } from "react";

const Home: NextPage = (): JSX.Element => {
    return (
        <MainLayout title="Emilio Abalos">
            <HeroSection />
            <div className={ContainerStyle.container}>
                <ProjectsSection />
            </div>
        </MainLayout>
    );
};

export default Home;
