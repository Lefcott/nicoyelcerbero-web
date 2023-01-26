import { useState } from "react";
import TextInput from "../TextInput";
import TicketSelector from "./TicketsSelector";

export default function BuyTicketsForm() {
  const [ticketCount, setTicketCount] = useState(1);
  const [email, setEmail] = useState("");

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
        <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
    </div>
  );
}
