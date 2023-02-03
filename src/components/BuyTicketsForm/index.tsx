import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import GuestInfo from "./GuestInfo";
import TicketSelector from "./TicketsSelector";
import mercadoPagoImage from "../../../public/mercado_pago_icon.png";
import { openCheckout } from "@/utils/mercadoPago";
import { createTicketPayment } from "@/services/api/ticketPayments";
import Spinner from "../Spinner";
import { validateTicketsForm } from "./utils";
import { getFee } from "@/utils/getFee";

export default function BuyTicketsForm({ show }) {
  const [ticketCount, setTicketCount] = useState(1);
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState<any[]>(Array(10).fill(null));
  const [creatingTicketPayment, setCreatingTicketPayment] = useState(false);

  const guestAuxArray: number[] = [];

  for (let i = 0; i < ticketCount; i += 1) {
    guestAuxArray.push(0);
  }

  const setGuestInfo = (guestIndex, key, value) => {
    setGuests([
      ...guests.slice(0, guestIndex),
      { ...(guests[guestIndex] ? guests[guestIndex] : {}), [key]: value },
      ...guests.slice(guestIndex + 1),
    ]);
  };

  const createPreference = async () => {
    const filteredGuests = guestAuxArray.map((_, i) => guests[i] || {});

    if (!validateTicketsForm(email, filteredGuests)) {
      return;
    }

    setCreatingTicketPayment(true);

    try {
      const ticketPayment = await createTicketPayment(
        show.key,
        email,
        filteredGuests
      );

      await openCheckout(ticketPayment.data.preferenceId);
    } catch (error) {
      console.error(error);
    }
    setCreatingTicketPayment(false);
  };

  const ticketsPrice = guestAuxArray.length * show.presalePrice;
  const fee = getFee(show, ticketsPrice);
  const totalPrice = ticketsPrice + fee;

  return (
    <div id="comprar-entradas" className="mb-96">
      <h2 className="text-4xl">Comprar entradas</h2>
      <div className="m-6 space-x-5">
        <span>Cantidad</span>
        <TicketSelector
          value={ticketCount}
          onChange={(e) => setTicketCount(e.target.value)}
        />
      </div>
      <div className="m-6 space-x-5">
        <span className="mr-6">Email</span>
        <TextInput onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>
      <div className="mt-20">
        {guestAuxArray.map((_, i) => (
          <div className="m-6 space-x-5" key={i}>
            <GuestInfo
              number={ticketCount > 1 ? i + 1 : ""}
              onChange={(key, value) => setGuestInfo(i, key, value)}
              firstName={guests[i]?.firstName || ""}
              lastName={guests[i]?.lastName || ""}
            />
          </div>
        ))}
      </div>
      <div className="mt-28 w-[253px]">
        {show.feePayer !== "seller" && (
          <>
            <div className="mb-2 space-x-5 flex justify-between">
              <span className="mr-6">
                {guestAuxArray.length} Entrada
                {guestAuxArray.length > 1 ? "s" : ""}:
              </span>
              <span className="mr-6">$ {ticketsPrice}</span>
            </div>
            <div className="mt-2 space-x-5 flex justify-between">
              <span className="mr-6">Tarifa de servicio:</span>
              <span className="mr-6">$ {fee.toFixed(2)}</span>
            </div>
          </>
        )}
        <div className="mt-2 space-x-5 flex justify-between">
          <span className="mr-6">Total a pagar:</span>
          <span className="mr-6">$ {totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex space-x-5 mt-4">
        <Button onClick={createPreference} disabled={creatingTicketPayment}>
          <Image
            width={20}
            height={20}
            src={mercadoPagoImage}
            alt="mercado pago icon"
          />
          <span>Comprar con Mercado Pago</span>
        </Button>
        {creatingTicketPayment && <Spinner />}
      </div>
      <div className="cho-container hidden"></div>
    </div>
  );
}
