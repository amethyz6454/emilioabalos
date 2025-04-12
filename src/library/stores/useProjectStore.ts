import { create } from "zustand";

export interface ProjectIdentifier {
    id: string;
    title: string;
}

interface ProjectModalState {
    isOpen: boolean;
}

interface ProjectStore {
    projectModal: ProjectModalState;
    selectedProject: ProjectIdentifier | null;
    closeProjectModal: () => void;
    openProjectModal: () => void;
    setSelectedProject: (project: ProjectIdentifier | null) => void;
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
