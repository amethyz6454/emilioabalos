import React, { JSX } from "react";
import ContainerStyle from "@/styles/components/container.module.scss";
import AboutStyles from "@/styles/sections/about.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Icon from "@/components/Icons";
import Socials from "@/components/Socials";
import Button from "@/components/Button";

const AboutSection: React.FC = (): JSX.Element => {
    return (
        <section className={ContainerStyle.container} id="about-section">
            <div className={classNames("flex py-12 sm:py-16", AboutStyles.about)}>
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <div className="shrink-0 grow-0 basis-auto">
                        <Image
                            src="/about/me.jpg"
                            height={600}
                            width={600}
                            className="overflow-hidden object-cover"
                            alt={process.env.NEXT_PUBLIC_APP_NAME as string}
                        />
                    </div>
                    <div className="flex grow basis-full flex-col gap-3">
                        <h1 className="flex items-center gap-4 text-2xl">
                            <span className="hidden sm:inline">
                                <Icon name="ArrowSquareLeft" />
                            </span>
                            <span>Thats Me!</span>
                        </h1>
                        <p className="text-sm/5 font-light">
                            My name is Emilio Abalos, a Web Designer and Front-End Developer based in General Trias,
                            Cavite, Philippines. With over 15 years of experience, I specialize in graphic design, logo
                            creation, iconography, prototyping, custom UI frameworks, and WordPress. I&apos;m passionate
                            about staying current with design and development trends, delivering forward-thinking and
                            user-centric digital experiences.
                        </p>
                        {/* <p className="text-sm/5 font-light">
                            My name is <strong>Emilio Abalos</strong>, a <strong>Web Designer</strong> and{" "}
                            <strong>Front-End Developer</strong> based in General Trias, Cavite, Philippines. With over
                            15 years of experience, I specialize in a diverse range of digital skills, including graphic
                            design, logo creation, iconography, prototyping, custom UI frameworks, and WordPress
                            implementation. My focus is on crafting visually engaging and functionally robust digital
                            experiences, ensuring seamless user interaction and optimal performance.
                        </p>
                        <p className="text-sm/5 font-light">
                            I&apos;m deeply passionate about staying current with the latest design and development trends.
                            This commitment to continuous learning allows me to deliver forward-thinking and
                            user-centric solutions. I believe in the power of innovative design to create impactful
                            online experiences that not only meet client objectives but also exceed user expectations.
                        </p> */}

                        <hr />

                        <h2 className="flex gap-4 text-lg">Services</h2>
                        <p className="text-sm/5 font-light">
                            Graphic Design / Web Design / Logo Design / WordPres / Prototyping / Iconography / Figma /
                            InDesign / Photoshop / Illustrator
                        </p>

                        <hr />

                        <h2 className="flex gap-4 text-lg">Tech Stack</h2>
                        <p className="text-sm/5 font-light">
                            HTML / CSS / SASS / LESS / TailwindCSS / Material UI / Styled Component / React Suite /
                            DaisyUI / Javascript / Typescript / ReactJS / NextJS / Zustand / Redux / WordPress
                        </p>

                        <hr />

                        <h2 className="flex gap-4 text-lg">UI Development Environment</h2>
                        <p className="text-sm/5 font-light">C# / PHP / CodeIgniter / Laravel Vite / KnockoutJS</p>

                        <hr />

                        <div className={AboutStyles.grid}>
                            <div className="flex flex-col gap-3">
                                <h2 className="flex gap-4 text-lg">Education</h2>
                                <p className="text-sm/5 font-light">
                                    BS in Computer Science
                                    <br />
                                    National College of Science and Technology
                                    <br />
                                    Dasmariñas, Cavite, PH
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="flex gap-4 text-lg">Hobbies</h2>
                                <p className="text-sm/5 font-light">
                                    Playing Video Games (Elden Ring and Lies of P)
                                    <br />
                                    Listening to Audiobooks (Expeditionary Force)
                                    <br />
                                    Mountain Biking
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="flex gap-4 text-lg">Favorite Band</h2>
                                <p className="text-sm/5 font-light">Korn, Linkin Park, Incubus, Eagles</p>
                            </div>
                        </div>

                        <hr />

                        <h2 className="flex gap-4 text-lg">
                            Look me up! <Socials />
                        </h2>
                        <div>
                            <Button href="/about/EmilioAbalos_CV.pdf" target="_blank">
                                Resume
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
