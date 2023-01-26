import { useEffect, useState } from "react";
import TextInput from "../TextInput";
import GuestInfo from "./GuestInfo";
import TicketSelector from "./TicketsSelector";

export default function BuyTicketsForm() {
  const [ticketCount, setTicketCount] = useState(1);
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState<any[]>(Array(10).fill(null));

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
        <TextInput onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mt-20">
        {guestAuxArray.map((_, i) => (
          <div className="m-6 space-x-5" key={i}>
            <GuestInfo
              number={i + 1}
              onChange={(key, value) => setGuestInfo(i, key, value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
