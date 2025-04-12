import Modal, { ModalCommonProps } from "@/components/Modal";
import React, { Fragment } from "react";

interface Project extends ModalCommonProps {
    id: string;
    title: string;
    contribution: string[];
    execution: string[];
    images: { src: string; title: string }[] | null;
    isDesign: boolean;
    isFigma: boolean;
    link: null;
    overview: string;
    prototype: string;
    thumbnail: string;
}

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
        <Modal title={project.title} isOpen={isOpen} onClose={onClose}>
            {project.overview}
        </Modal>
    );
};

export default ProjectViewModal;
