import { create } from "zustand";

export interface Project {
    id: string;
    title: string;
    contribution?: string[];
    execution?: string[];
    images?: { src: string; title: string }[];
    isDesign?: boolean;
    isFigma?: boolean;
    link?: string | null;
    overview?: string;
    prototype?: string;
    thumbnail?: string;
}

interface ProjectModalState {
    isOpen: boolean;
}

interface ProjectStore {
    projectModal: ProjectModalState;
    selectedProject: Project | null;
    closeProjectModal: () => void;
    openProjectModal: () => void;
    setSelectedProject: (project: Project | null) => void;
}

const useProjectStore = create<ProjectStore>((set) => ({
    projectModal: {
        isOpen: false,
    },
    selectedProject: null,
    closeProjectModal: () => set({ projectModal: { isOpen: false } }),
    openProjectModal: () => set({ projectModal: { isOpen: true } }),
    setSelectedProject: (project) => set({ selectedProject: project }),
}));

export default useProjectStore;
