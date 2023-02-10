import { TicketPaymentInterface } from "@/interfaces/ticketPayment";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TicketPaymentStore = TicketPaymentInterface & {
  update: (properties: Partial<TicketPaymentInterface>) => void;
};

export const useTicketPaymentStore = create<TicketPaymentStore>()(
  devtools(
    (set) => ({
      _id: "",
      paymentInternalId: "",
      paymentExternalId: "",
      refundToken: "",
      showKey: "",
      payerEmail: "",
      guests: [],
      status: "",
      update: (properties) => set({ ...properties }),
    }),
    { name: "show-storage" }
  )
);
