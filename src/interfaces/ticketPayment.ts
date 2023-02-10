import { GuestInterface } from "./guest";

export interface TicketPaymentInterface {
  _id: string;
  paymentInternalId: string;
  paymentExternalId: string;
  refundToken: string;
  showKey: string;
  payerEmail: string;
  guests: GuestInterface[];
  status: string;
}
