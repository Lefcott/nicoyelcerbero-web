import { ShowInterface } from "@/interfaces/show";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type ShowStore = ShowInterface & {
  update: (properties: Partial<ShowInterface>) => void;
};

export const useShowStore = create<ShowStore>()(
  devtools(
    // persist(
    (set) => ({
      date: "",
      active: true,
      address: "",
      addressUrl: "",
      bannerUrl: "",
      feePayer: "buyer",
      flyerUrl: "",
      guests: [],
      isFree: false,
      key: "",
      locationName: "",
      onlyAdults: true,
      indoorPrice: 0,
      presalePrice: 0,
      update: (properties) => set({ ...properties }),
    }),
    {
      name: "show-storage",
    }
    // )
  )
);
