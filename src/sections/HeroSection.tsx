import Icon from "@/components/Icons";
import Socials from "@/components/Socials";
import useScrollStore from "@/library/stores/useScrollStore";
import HeroStyles from "@/styles/sections/hero.module.scss";
import classNames from "classnames";
import React, { JSX } from "react";

const HeroSection: React.FC = (): JSX.Element => {
    const scrollToSection = useScrollStore((state) => state.scrollToSection);

    return (
        <section
            className={classNames(
                "relative z-30 flex h-dvh min-h-dvh grow items-center justify-center text-center",
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
                        Welcome to my portfolio of work. I&apos;m a Web Designer and Front-End Developer based in Genera
                        Trias, Cavite, Philippines.
                    </p>
                </div>
                <Socials />
                <span className="mt-24 mb-2">See My Work</span>
                <button
                    type="button"
                    className="inline-block h-12 w-12 cursor-pointer"
                    onClick={() => scrollToSection("project-section")}
                >
                    <Icon name="ArrowSquareDown" size={48} />
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
