import create from "zustand";

type CLIStore = {
  mode: number;
  actions: {
    setMode: (mode: number) => void;
  };
};

const useCliStore = create<CLIStore>((set, get) => ({
  mode: 24,
  actions: {
    setMode: () => {
      set(() => ({ mode: Math.random() }));
    },
  },
}));

export const useMode = () => useCliStore((state) => state.mode);
export const useActions = () => useCliStore((state) => state.actions);
