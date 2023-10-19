import { FromAdInterface } from "@/interfaces/fromAd";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type FromAdStore = FromAdInterface & {
  update: (newValue: boolean) => void;
};

export const useFromAdStore = create<FromAdStore>()(
  devtools(
    (set) => ({
      fromAd: false,
      update: (newValue: boolean) => set({ fromAd: newValue }),
    }),
    { name: "show-storage" }
  )
);
