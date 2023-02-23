import { useTicketPaymentStore } from "@/store/ticketPayment";
import { useState } from "react";

export default function RefundForm() {
  const ticketPayment = useTicketPaymentStore((state) => state);
  const [selectedGuests, setSelectedGuests] = useState({});

  const switchGuestSelected = (index) => {
    setSelectedGuests({
      ...selectedGuests,
      [index]: !selectedGuests[index],
    });
  };

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
          const selected = !!selectedGuests[i];
          return (
            <div
              key={i}
              className="bg-green-600 w-full h-14 flex justify-center items-center rounded-md space-x-2 cursor-pointer transition-[0.4s]"
              style={{
                ...(selected ? {} : { opacity: 0.7 }),
              }}
              onClick={() => switchGuestSelected(i)}
            >
              <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
                checked={selected}
                onChange={() => switchGuestSelected(i)}
              />
              <div className="select-none">
                {guest.firstName} {guest.lastName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
