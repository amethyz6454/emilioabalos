import { FIGMA_PROJECTS, LOGO_PROJECTS } from "@/pages/api/projects";
import ProjectsStyles from "@/styles/sections/projects.module.scss";
import classNames from "classnames";
import Image from "next/image";
import React, { JSX, useState } from "react";

interface Project {
    title: string;
    thumbnail: string;
    overview: string;
    contribution: string[];
    execution: string[];
    images: { src: string; title: string }[] | null;
    prototype: string;
    isFigma: boolean;
}

const ProjectsSection: React.FC = (): JSX.Element => {
    const [viewProject, setViewProject] = useState<Project | null>(null);

    return (
        <section className={classNames("flex", ProjectsStyles.section)}>
            <h4 className={classNames("pt-4 text-2xl font-bold", ProjectsStyles.heading)}>Figma Prototypes</h4>
            {FIGMA_PROJECTS.map((project, p) => (
                <button type="button" className={classNames("relative", ProjectsStyles.items)} key={project.title}>
                    <Image
                        alt={project.title}
                        className="aspect-8/5 object-contain"
                        height={480}
                        priority={p === 0}
                        src={project.thumbnail}
                        width={768}
                        quality={90}
                    />
                    {project.isFigma && project.images && (
                        <div
                            className={classNames(
                                "absolute inset-0 grid place-items-center opacity-0 backdrop-blur-xl transition-all",
                                ProjectsStyles.thumbnails
                            )}
                        >
                            <Image
                                alt={project.images[0].title}
                                className="object-contain"
                                height={144}
                                priority={p === 0}
                                src={project.images[0].src}
                                width={144}
                            />
                        </div>
                    )}
                </button>
            ))}

            <h4 className={classNames("pt-4 text-2xl font-bold", ProjectsStyles.heading)}>Branding</h4>
            {LOGO_PROJECTS.map((project, p) => (
                <button type="button" className={classNames("relative", ProjectsStyles.items)} key={project.title}>
                    <Image
                        alt={project.title}
                        className="aspect-8/5 object-contain"
                        height={480}
                        src={project.thumbnail}
                        width={768}
                        quality={90}
                    />
                </button>
            ))}
        </section>
    );
};

export default ProjectsSection;
