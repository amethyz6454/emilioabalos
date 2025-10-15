import Button from "@/components/Button";
import Modal, { ModalCommonProps } from "@/components/Modal";
import { Project } from "@/library/stores/useProjectStore";
import Image from "next/image";
import React, { ReactNode, useId } from "react";

interface ProjectViewModalProps extends ModalCommonProps {
    project: Project | null;
}

/**
 * A reusable component to render a section within the project modal.
 * It only renders if the `content` is truthy.
 */
const ProjectSection: React.FC<{ title: string; content: ReactNode | undefined | null | false }> = ({
    title,
    content,
}) => {
    const headingId = useId();

    if (!content) {
        return null;
    }
    return (
        <section className="flex flex-col gap-2" aria-labelledby={headingId}>
            <h3 id={headingId} className="text-lg font-bold">
                {title}
            </h3>
            {content}
        </section>
    );
};

const ProjectViewModal: React.FC<ProjectViewModalProps> = ({ isOpen, onClose, project }) => {
    if (!project) {
        return null;
    }

    return (
        <Modal title={project.title} isOpen={isOpen} onClose={onClose} isFooterCloseButtonShow={true}>
            <div className="flex flex-col gap-4">
                {project.thumbnail && (
                    <div className="relative">
                        <Image
                            alt={`Thumbnail for ${project.title}`}
                            className="block aspect-square rounded-md bg-gray-100 object-cover sm:aspect-video sm:object-contain"
                            height={480}
                            quality={90}
                            src={project.thumbnail}
                            width={768}
                            priority
                        />
                    </div>
                )}

                {project.overview && <ProjectSection title="Overview" content={<p>{project.overview}</p>} />}

                {project.contribution && (
                    <ProjectSection
                        title="My Contribution"
                        content={
                            <ul className="list-inside list-disc">
                                {project.contribution.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        }
                    />
                )}

                {project.images && (
                    <ProjectSection
                        title="More Images"
                        content={
                            <div className="columns-2 gap-2 sm:columns-3">
                                {project.images.map((image) => (
                                    <Image
                                        key={image.title}
                                        alt={image.title}
                                        className="mb-2 block h-auto w-full break-inside-avoid rounded-md object-contain"
                                        height={480}
                                        quality={90}
                                        src={image.src}
                                        width={768}
                                    />
                                ))}
                            </div>
                        }
                    />
                )}

                {project.prototype && (
                    <div className="grid place-items-center py-8">
                        <Button size="large" href={project.prototype} target={"_blank"}>
                            See Prototype
                            <span className="sr-only"> (opens in a new tab)</span>
                        </Button>
                    </div>
                )}

                {project.link && (
                    <div className="grid place-items-center py-8">
                        <Button size="large" href={project.link} target="_blank">
                            Go To Site
                            <span className="sr-only"> (opens in a new tab)</span>
                        </Button>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default ProjectViewModal;
