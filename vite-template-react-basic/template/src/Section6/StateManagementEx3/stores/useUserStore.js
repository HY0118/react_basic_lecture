// stores/useUserStore.js
import { create } from "zustand";

const useUserStore = create((set) => ({
    username: "CODEUCK",
    updateName: (newName) => set({ username: newName }),
}));

export default useUserStore;
