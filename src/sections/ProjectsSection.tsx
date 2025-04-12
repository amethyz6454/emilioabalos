import LinkButtonDiv from "@/components/wrapper/LinkButtonDiv";
import useProjectStore, { Project } from "@/library/stores/useProjectStore";
import ProjectViewModal from "@/modals/ProjectViewModal";
import { DEV_PROJECTS, FIGMA_PROJECTS, IH_PROJECTS, LOGO_PROJECTS } from "@/pages/api/projects";
import ProjectsStyles from "@/styles/sections/projects.module.scss";
import classNames from "classnames";
import Image from "next/image";
import React, { JSX } from "react";

const ProjectsSection: React.FC = (): JSX.Element => {
    const { projectModal, selectedProject, closeProjectModal, openProjectModal, setSelectedProject } =
        useProjectStore();

    const handleSelectProject = (project: Project) => {
        setSelectedProject(project);
        openProjectModal();
    };

    return (
        <section className={classNames("flex", ProjectsStyles.section)}>
            <h4 className={classNames("pt-4 text-2xl font-bold", ProjectsStyles.heading)}>Figma Prototypes</h4>
            {FIGMA_PROJECTS.map((project, p) => (
                <LinkButtonDiv
                    key={project.title}
                    className={classNames("relative cursor-pointer", ProjectsStyles.items)}
                    onClick={() => handleSelectProject(project)}
                >
                    <Image
                        alt={project.title}
                        className="aspect-8/5 object-contain"
                        height={480}
                        priority={p === 0}
                        quality={90}
                        src={project.thumbnail}
                        width={768}
                    />
                    {project.isFigma && project.images && (
                        <span
                            className={classNames(
                                "sm-block absolute inset-0 grid hidden place-items-center opacity-0 backdrop-blur-xl transition-all",
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
                        </span>
                    )}
                </LinkButtonDiv>
            ))}

            <h4 className={classNames("pt-4 text-2xl font-bold", ProjectsStyles.heading)}>Logo</h4>
            {LOGO_PROJECTS.map((project, p) => (
                <LinkButtonDiv
                    key={project.title}
                    className={classNames("relative cursor-pointer", ProjectsStyles.items)}
                    onClick={() => handleSelectProject(project)}
                >
                    <Image
                        alt={project.title}
                        className="aspect-8/5 object-contain"
                        height={480}
                        priority={p === 0}
                        quality={90}
                        src={project.thumbnail}
                        width={768}
                    />
                    <span
                        className={classNames(
                            "absolute inset-0 grid place-items-center opacity-0 backdrop-blur-xl transition-all",
                            ProjectsStyles.thumbnails
                        )}
                    >
                        {project.title}
                    </span>
                </LinkButtonDiv>
            ))}

            <h4 className={classNames("pt-4 text-2xl font-bold", ProjectsStyles.heading)}>
                Web Design and Development
            </h4>
            {DEV_PROJECTS.map((project, p) => (
                <LinkButtonDiv
                    key={project.title}
                    className={classNames("relative cursor-pointer", ProjectsStyles.items)}
                    onClick={() => handleSelectProject(project)}
                >
                    <Image
                        alt={project.title}
                        className="aspect-8/5 object-cover"
                        height={480}
                        priority={p === 0}
                        quality={90}
                        src={project.thumbnail}
                        width={768}
                    />
                    <span
                        className={classNames(
                            "absolute inset-0 grid place-items-center opacity-0 backdrop-blur-xl transition-all",
                            ProjectsStyles.thumbnails
                        )}
                    >
                        {project.title}
                    </span>
                </LinkButtonDiv>
            ))}

            <h4 className={classNames("pt-4 text-2xl font-bold", ProjectsStyles.heading)}>Idle Hand</h4>
            {IH_PROJECTS.map((project, p) => (
                <LinkButtonDiv
                    className={classNames("relative", ProjectsStyles.items)}
                    key={project.title}
                    link={project.link}
                    target={project.link ? "_black" : undefined}
                >
                    <Image
                        alt={project.title}
                        className="aspect-8/5 object-cover"
                        height={480}
                        priority={p === 0}
                        quality={90}
                        src={project.thumbnail}
                        width={768}
                    />
                    <span
                        className={classNames(
                            "absolute inset-0 grid place-items-center opacity-0 backdrop-blur-xl transition-all",
                            ProjectsStyles.thumbnails
                        )}
                    >
                        {project.title}
                    </span>
                </LinkButtonDiv>
            ))}

            <ProjectViewModal isOpen={projectModal.isOpen} onClose={closeProjectModal} project={selectedProject} />
        </section>
    );
};

export default ProjectsSection;
