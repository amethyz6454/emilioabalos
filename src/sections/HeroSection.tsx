import React, { JSX } from "react";
import HeroStyles from "@/styles/sections/hero.module.scss";
import classNames from "classnames";

const HeroSection: React.FC = (): JSX.Element => {
    return (
        <section
            className={classNames(
                "flex h-dvh min-h-dvh grow items-center justify-center text-center",
                HeroStyles.section
            )}
        >
            <div>
                <h1 className={classNames("font-black", HeroStyles.title)}>Hi, I&apos;m Milo.</h1>
                <h2 className={classNames("font-black", HeroStyles.subtitle)}>
                    A Web Designer and Front-End Developer.
                </h2>
            </div>
        </section>
    );
};

export default HeroSection;
