import { create } from "zustand";

interface ScrollStore {
    targetSectionId: string | null;
    setTargetSectionId: (id: string | null) => void;
    scrollToTargetSection: () => void;
}

const useScrollStore = create<ScrollStore>((set, get) => ({
    targetSectionId: null,
    setTargetSectionId: (id) => set({ targetSectionId: id }),
    scrollToTargetSection: () => {
        const targetId = get().targetSectionId;
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            set({ targetSectionId: null });
        }
    },
}));

export default useScrollStore;
