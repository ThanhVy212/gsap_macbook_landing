import { create } from "zustand";

type MacbookStore = {
  color: string;
  scale: number;
  texture: string;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: string) => void;
  reset: () => void;
};

const useMacbookStore = create<MacbookStore>((set) => ({
  color: "#2e2c2e",
  scale: 0.08,
  texture: "/videos/feature-1.mp4",

  setColor: (color) => set({ color }),

  setScale: (scale) => set({ scale }),

  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({
      color: "#2e2c2e",
      scale: 0.08,
      texture: "/videos/feature-1.mp4",
    }),
}));

export default useMacbookStore;
