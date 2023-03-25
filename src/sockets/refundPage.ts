import { io } from "socket.io-client";

import {
  TicketPaymentStore,
  useTicketPaymentStore,
} from "@/store/ticketPayment";
import { ShowInterface } from "@/interfaces/show";

let ticketPayment: TicketPaymentStore;

useTicketPaymentStore.subscribe((state) => {
  ticketPayment = state;
});

const showDetailsPageSocket = io(`${process.env.API_URL || ""}/refundPage`);

showDetailsPageSocket.on(
  "ticketPaymentUpdated",
  (data: Partial<ShowInterface>) => {
    if (data._id === ticketPayment._id) {
      useTicketPaymentStore.setState(data);
    }
  }
);
