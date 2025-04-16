import Button from "@/components/Button";
import Modal, { ModalCommonProps } from "@/components/Modal";
import { Project } from "@/library/stores/useProjectStore";
import Image from "next/image";
import React, { Fragment } from "react";

interface ProjectViewModalProps extends ModalCommonProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

const ProjectViewModal: React.FC<ProjectViewModalProps> = ({ isOpen, onClose, project }) => {
    if (!project) {
        return <Fragment />;
    }

    return (
        <Modal title={project.title} isOpen={isOpen} onClose={onClose} isFooterCloseButtonShow={true}>
            <div className="flex flex-col gap-4">
                {project.thumbnail && (
                    <Image
                        alt={project.title}
                        className="block aspect-square bg-gray-100 object-cover sm:aspect-8/5 sm:object-contain"
                        height={480}
                        quality={90}
                        src={project.thumbnail}
                        width={768}
                    />
                )}
                {project.overview && (
                    <Fragment>
                        <p className="font-bold">Overview</p>
                        <p>{project.overview}</p>
                    </Fragment>
                )}

                {project.contribution && (
                    <Fragment>
                        <p className="font-bold">Contribution</p>
                        <ul className="list-inside list-disc">
                            {project.contribution.map((con) => (
                                <li key={con}>{con}</li>
                            ))}
                        </ul>
                    </Fragment>
                )}

                {project.images && (
                    <Fragment>
                        <p className="font-bold">Images</p>
                        <div className="columns-2 gap-2 sm:columns-3">
                            {project.images.map((image) => (
                                <Image
                                    key={image.title}
                                    alt={image.title}
                                    className="mb-2 block h-auto w-full break-inside-avoid object-contain"
                                    height={480}
                                    quality={90}
                                    src={image.src}
                                    width={768}
                                />
                            ))}
                        </div>
                    </Fragment>
                )}

                {project.prototype && (
                    <div className="grid place-items-center py-8">
                        <Button size="large" href={project.prototype} target="_blank">
                            See Prototype
                        </Button>
                    </div>
                )}

                {project.link && (
                    <div className="grid place-items-center py-8">
                        <Button size="large" href={project.link} target="_blank">
                            Go To Site
                        </Button>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default ProjectViewModal;
