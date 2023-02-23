import axios from "../../utils/axios";

export const createTicketPayment = (showKey, payerEmail, guests) =>
  axios.post("/ticketPayments", { showKey, payerEmail, guests });

export const getTicketPayment = (ticketPaymentId) =>
  axios.get(`/ticketPayments/${encodeURIComponent(ticketPaymentId)}`);

export const createRefund = (ticketPaymentId, guestIds, token) =>
  axios.post(
    `/ticketPayments/${encodeURIComponent(ticketPaymentId)}/refunds`,
    { guestIds },
    { params: { token } }
  );

export const getTicketPaymentIds = () => axios.get("/ticketPaymentIds");
