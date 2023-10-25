import { createRefund } from "@/services/api/ticketPayments";
import { useTicketPaymentStore } from "@/store/ticketPayment";
import { useEffect, useState } from "react";
import sweetAlert from "sweetalert2";
import Button from "../Button";
import { getSelectedGuests } from "./utils";

export default function RefundForm({ token }) {
  const ticketPayment = useTicketPaymentStore((state) => state);
  const [executing, setExecuting] = useState(false);
  const [selectedGuestIndexes, setSelectedGuestIndexes] = useState({});
  const selectedGuests = getSelectedGuests(
    ticketPayment.guests,
    selectedGuestIndexes
  );
  const selectedGuestIds = selectedGuests.map((guest) => guest._id);
  const selectedGuestNames = selectedGuests.map(
    (guest) => `${guest.firstName} ${guest.lastName}`
  );
  const conditionalS = selectedGuestIds.length > 1 ? "s" : "";
  const conditionalN = selectedGuestIds.length > 1 ? "n" : "";

  const switchGuestSelected = (...indexes) => {
    setSelectedGuestIndexes({
      ...selectedGuestIndexes,
      ...Object.fromEntries(
        indexes.map((index) => [index, !selectedGuestIndexes[index]])
      ),
    });
  };

  const handleRefund = () => {
    sweetAlert
      .fire({
        title: `Devolver entrada${conditionalS}`,
        text: `Querés devolver la${conditionalS} entrada${conditionalS} de ${selectedGuestNames.join(
          ", "
        )}?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
      })
      .then(({ isConfirmed }) => {
        if (isConfirmed) {
          setExecuting(true);
          createRefund(ticketPayment._id, selectedGuestIds, token)
            .then(() => {
              sweetAlert.fire({
                title: `Entrada${conditionalS} devuelta${conditionalS}`,
                text: `La${conditionalS} entrada${conditionalS} de ${selectedGuestNames.join(
                  ", "
                )} ha${conditionalN} sido devuelta${conditionalS} con éxito.`,
                icon: "success",
              });
            })
            .catch((error) => {
              if (error.response.data.code === "ticketsAlreadyRefunded") {
                sweetAlert.fire({
                  title: `Entrada${conditionalS} devuelta${conditionalS}`,
                  text: `La${conditionalS} entrada${conditionalS} de ${error.response.data.refundedGuests.join(
                    ", "
                  )} ya ha${conditionalN} sido devuelta${conditionalS}.`,
                  icon: "warning",
                });
              } else if (
                error.response.data.code === "cancellationTimePassed"
              ) {
                sweetAlert.fire({
                  title: "Ya no se puede devolver la entrada",
                  text: `Ya pasó el tiempo para devolver la${conditionalS} entrada${conditionalS}.`,
                  icon: "warning",
                });
              } else if (error.response.data.code === "showNotFound") {
                sweetAlert.fire({
                  title: "No se puede devolver la entrada",
                  text: "No se encontró el evento solicitado. Por favor, contactate con nosotros.",
                  icon: "warning",
                });
              }
            })
            .finally(() => {
              setExecuting(false);
            });
        }
      });
  };

  useEffect(() => {
    const guestIndexes = ticketPayment.guests
      .map((guest) => {
        const isSelected = selectedGuestIds.includes(guest._id);
        if (!guest.cancelled || !isSelected) {
          return null;
        }
        const guestIndex = ticketPayment.guests.findIndex(
          (_guest) => _guest._id === guest._id
        );
        return guestIndex !== -1 ? guestIndex : null;
      })
      .filter((index) => index !== null);

    switchGuestSelected(...guestIndexes);
  }, [ticketPayment]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl">
        Devolver entrada{ticketPayment.guests.length > 1 ? "s" : ""}
      </h1>
      {ticketPayment.guests.length > 1 && (
        <p className="mt-7">
          Seleccioná la/s persona/s que no van a asistir al evento:
        </p>
      )}
      <div className="space-y-5 w-full mt-4">
        {ticketPayment.guests.map((guest, i) => {
          const selected = !!selectedGuestIndexes[i];
          return (
            <div
              key={i}
              className="bg-green-600 w-full h-14 flex justify-center items-center rounded-md space-x-2 cursor-pointer transition-[0.4s]"
              style={{
                ...(selected ? {} : { opacity: 0.7 }),
                ...(guest.cancelled ? { cursor: "default", opacity: 0.5 } : {}),
              }}
              onClick={() => !guest.cancelled && switchGuestSelected(i)}
            >
              <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
                checked={selected}
                onChange={() => !guest.cancelled && switchGuestSelected(i)}
                style={{
                  ...(guest.cancelled ? { cursor: "default" } : {}),
                }}
              />
              <div className="select-none">
                {guest.firstName} {guest.lastName}{" "}
                {guest.cancelled ? " (entrada devuelta)" : ""}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <Button
          disabled={selectedGuestIds.length === 0 || executing}
          onClick={handleRefund}
        >
          Devolver entrada{conditionalS}
        </Button>
      </div>
    </div>
  );
}
