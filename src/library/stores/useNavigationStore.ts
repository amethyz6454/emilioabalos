import { create } from "zustand";

type TargetName = "Work" | "Milo";

interface ScrollStore {
    targetName: TargetName;
    isNavigationOpen: boolean;
    setTargetName: (name: string | null) => void;
    setIsNavigationOpen: (isNavigationOpen: boolean) => void;
}

const useNavigationStore = create<ScrollStore>((set) => ({
    targetName: "Work",
    isNavigationOpen: false,
    setTargetName: (name) => {
        const validNames: TargetName[] = ["Work", "Milo"];
        const newName = validNames.includes(name as TargetName) ? (name as TargetName) : "Work";
        set({ targetName: newName });
    },
    setIsNavigationOpen: (isNavigationOpen) => set({ isNavigationOpen: isNavigationOpen }),
}));

export default useNavigationStore;
