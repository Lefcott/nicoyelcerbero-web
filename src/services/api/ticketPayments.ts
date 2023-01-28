import axios from "../../utils/axios";

export const createTicketPayment = (showKey, payerEmail, guests) =>
  axios.post("/ticketPayments", { showKey, payerEmail, guests });
