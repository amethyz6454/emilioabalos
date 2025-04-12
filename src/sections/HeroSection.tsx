import Icon from "@/components/Icons";
import HeroStyles from "@/styles/sections/hero.module.scss";
import classNames from "classnames";
import React, { JSX } from "react";

const HeroSection: React.FC = (): JSX.Element => {
    return (
        <section
            className={classNames(
                "flex h-dvh min-h-dvh grow items-center justify-center text-center",
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
                        Welcome to my portfolio of work. I am a Web Designer and Front-End Develop in Genera Trias,
                        Cavite.
                    </p>
                </div>
                <a href="https://www.linkedin.com/in/emilioabalos/" target="_blank">
                    <Icon name="LinkedIn" size={32} />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
