import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/sections/HeroSection";
import { NextPage } from "next";
import { JSX } from "react";

const Home: NextPage = (): JSX.Element => {
    return (
        <MainLayout title="Emilio Abalos">
            <HeroSection />
        </MainLayout>
    );
};

export default Home;
