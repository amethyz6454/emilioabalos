import Icon from "@/components/Icons";
import Socials from "@/components/Socials";
import useScrollStore from "@/library/stores/useScrollStore";
import HeroStyles from "@/styles/sections/hero.module.scss";
import classNames from "classnames";
import React, { JSX } from "react";

const HeroSection: React.FC = (): JSX.Element => {
    const setTargetSectionId = useScrollStore((state) => state.setTargetSectionId);
    const scrollToTargetSection = useScrollStore((state) => state.scrollToTargetSection);

    return (
        <section
            className={classNames(
                "relative z-39 flex h-dvh min-h-dvh grow items-center justify-center text-center",
                HeroStyles.section
            )}
        >
            <div className="flex max-w-full flex-col items-center justify-center sm:max-w-[60%]">
                <h1 className={classNames("font-black", HeroStyles.title)}>Hi, I&apos;m Milo.</h1>
                <h2 className={classNames("mb-8 font-black", HeroStyles.subtitle)}>
                    A Web Designer and Front-End Developer.
                </h2>
                <div className="mb-8 max-w-full sm:max-w-[60%]">
                    <p className="text-lg">
                        Welcome to my portfolio of work. I&apos;m a Web Designer and Front-End Develop based in Genera
                        Trias, Cavite, Philippines.
                    </p>
                </div>
                <Socials />
                <button
                    type="button"
                    className="mt-24 h-8 w-8 cursor-pointer"
                    onClick={() => {
                        setTargetSectionId("project-section");
                        scrollToTargetSection();
                    }}
                >
                    <Icon name="ArrowSquareDown" size={32} />
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
