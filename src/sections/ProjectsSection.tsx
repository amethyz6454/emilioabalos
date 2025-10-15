import LinkButtonDiv from "@/components/wrapper/LinkButtonDiv";
import useProjectStore, { Project } from "@/library/stores/useProjectStore";
import ProjectViewModal from "@/modals/ProjectViewModal";
import { DEV_PROJECTS, FIGMA_PROJECTS, IH_PROJECTS, LOGO_PROJECTS } from "@/pages/api/projects";
import ContainerStyle from "@/styles/components/container.module.scss";
import ProjectsStyles from "@/styles/sections/projects.module.scss";
import classNames from "classnames";
import Image from "next/image";
import React, { JSX, useId } from "react";

interface ProjectItemProps {
    project: Project;
    isFirst?: boolean;
    onClick?: (project: Project) => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, isFirst = false, onClick }) => {
    const content = (
        <>
            {project.thumbnail && (
                <Image
                    alt={`Thumbnail for ${project.title}`}
                    className="aspect-8/5 h-auto w-full object-cover"
                    height={480}
                    priority={isFirst}
                    quality={90}
                    src={project.thumbnail}
                    width={768}
                />
            )}
            {project.isFigma && project.images ? (
                <span
                    className={classNames(
                        "sm-block absolute inset-0 hidden place-items-center opacity-0 backdrop-blur-xl transition-all sm:grid",
                        ProjectsStyles.logos
                    )}
                >
                    <Image
                        alt={project.images[0].title}
                        className="object-contain"
                        height={144}
                        priority={isFirst}
                        src={project.images[0].src}
                        width={144}
                    />
                </span>
            ) : (
                <span
                    className={classNames(
                        "bg-primary absolute top-full right-0 left-0 hidden place-items-center p-2 text-white transition-all sm:grid",
                        ProjectsStyles.details
                    )}
                >
                    {project.title}
                </span>
            )}
        </>
    );

    return (
        <LinkButtonDiv
            className={classNames("relative cursor-pointer overflow-hidden rounded-md", ProjectsStyles.items)}
            onClick={onClick ? () => onClick(project) : undefined}
            // link={project.link ?? undefined}
            target={project.link ? "_blank" : undefined}
            rel={project.link ? "noopener noreferrer" : undefined}
        >
            {content}
            {project.link && <span className="sr-only">(opens in a new tab)</span>}
        </LinkButtonDiv>
    );
};

interface ProjectCategoryProps {
    title: string;
    projects: readonly Project[];
    onProjectSelect: (project: Project) => void;
    isFirstCategory?: boolean;
}

const ProjectCategory: React.FC<ProjectCategoryProps> = ({
    title,
    projects,
    onProjectSelect,
    isFirstCategory = false,
}) => {
    const headingId = useId();

    return (
        <section className={classNames("flex py-12 sm:py-16", ProjectsStyles.section)} aria-labelledby={headingId}>
            <h2 className={classNames("pt-4 text-2xl font-bold", ProjectsStyles.heading)} id={headingId}>
                {title}
            </h2>
            {projects.map((project, index) => (
                <ProjectItem
                    key={project.title}
                    project={project}
                    isFirst={isFirstCategory && index === 0}
                    // onClick={project.link ? undefined : onProjectSelect}
                    onClick={onProjectSelect}
                />
            ))}
        </section>
    );
};

const ProjectsSection: React.FC = (): JSX.Element => {
    const { projectModal, selectedProject, closeProjectModal, openProjectModal, setSelectedProject } =
        useProjectStore();

    const handleSelectProject = (project: Project) => {
        setSelectedProject(project);
        openProjectModal();
    };

    return (
        <React.Fragment>
            <div className={ContainerStyle.container} id="project-section">
                <ProjectCategory
                    title="Figma Prototypes"
                    projects={FIGMA_PROJECTS}
                    onProjectSelect={handleSelectProject}
                    isFirstCategory={true}
                />
                <ProjectCategory title="Logo" projects={LOGO_PROJECTS} onProjectSelect={handleSelectProject} />
                <ProjectCategory
                    title="Web Design and Development"
                    projects={DEV_PROJECTS}
                    onProjectSelect={handleSelectProject}
                />
                <ProjectCategory title="Idle Hand" projects={IH_PROJECTS} onProjectSelect={handleSelectProject} />
            </div>

            <ProjectViewModal isOpen={projectModal.isOpen} onClose={closeProjectModal} project={selectedProject} />
        </React.Fragment>
    );
};

export default ProjectsSection;
