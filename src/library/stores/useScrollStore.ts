import { create } from "zustand";

interface ScrollStore {
    scrollToSection: (id: string) => void;
}

const useScrollStore = create<ScrollStore>()(() => ({
    scrollToSection: (id) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    },
}));

export default useScrollStore;
