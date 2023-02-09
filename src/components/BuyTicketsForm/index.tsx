import Image from "next/image";
import { useEffect, useState } from "react";
import sweetAlert from "sweetalert2";
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
import { useShowStore } from "@/store/show";
import EmailVerificationModal from "../EmailVerificationModal";
import { createVerificationCode } from "@/services/api/verificationCodes";

export default function BuyTicketsForm() {
  const show = useShowStore((state) => state);
  const [ticketCount, setTicketCount] = useState(1);
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState<any[]>(Array(10).fill(null));
  const [creatingTicketPayment, setCreatingTicketPayment] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [codeModalOpen, setCodeModalOpen] = useState(false);

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

    setCreatingTicketPayment(true);

    try {
      const ticketPayment = await createTicketPayment(
        show.key,
        email,
        filteredGuests
      );

      await openCheckout(ticketPayment.data.preferenceId);
    } catch (error) {
      sweetAlert.fire({
        title: "Error",
        text: "Hubo un error al crear el pago con mercad pago.",
        icon: "error",
        confirmButtonColor: "#3085d6",
      });
      console.error(error);
    }
    setCreatingTicketPayment(false);
  };

  const sendVerificationCode = async () => {
    const filteredGuests = guestAuxArray.map((_, i) => guests[i] || {});

    if (!validateTicketsForm(email, filteredGuests)) {
      return;
    }

    setSendingEmail(true);

    try {
      await createVerificationCode(email);
    } catch (error) {
      sweetAlert.fire({
        title: "Error",
        text: "Hubo un error al enviar el código de verificación.",
        icon: "error",
        confirmButtonColor: "#3085d6",
      });
      console.error(error);
    }

    setSendingEmail(false);
    setCodeModalOpen(true);
  };

  const handlePassCodeValidation = () => {
    setCodeModalOpen(false);
    createPreference();
  };

  const ticketsPrice = guestAuxArray.length * (show.presalePrice || 0);
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
      <div className="mt-4">
        <Button
          onClick={sendVerificationCode}
          disabled={sendingEmail || creatingTicketPayment}
          loading={sendingEmail || creatingTicketPayment}
        >
          <Image
            width={20}
            height={20}
            src={mercadoPagoImage}
            alt="mercado pago icon"
          />
          <span>Comprar con Mercado Pago</span>
        </Button>
      </div>
      <EmailVerificationModal
        open={codeModalOpen}
        email={email}
        onClose={() => setCodeModalOpen(false)}
        onPass={handlePassCodeValidation}
      />
      <div className="cho-container hidden"></div>
    </div>
  );
}
