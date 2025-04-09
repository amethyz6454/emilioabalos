import { PROJECTS } from "@/pages/api/projects";
import ProjectsStyles from "@/styles/sections/projects.module.scss";
import classNames from "classnames";
import Image from "next/image";
import React, { JSX } from "react";

const ProjectsSection: React.FC = (): JSX.Element => {
    return (
        <section className={classNames("flex", ProjectsStyles.section)}>
            {PROJECTS.map((project, p) => (
                <div className="relative" key={project.title}>
                    <Image src={project.thumbnail} alt={project.title} height={480} width={768} priority={p === 0} />
                </div>
            ))}
        </section>
    );
};

export default ProjectsSection;
