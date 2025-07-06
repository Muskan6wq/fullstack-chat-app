import { create } from "zustand";

export const useThemesStore = create((set, get) => ({
    theme: localStorage.getItem("chat-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("chat-theme", theme);
        set({ theme });
    },
}));
