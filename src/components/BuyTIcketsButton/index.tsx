import { cleanPath } from "@/utils/cleanPath";
import Button from "../Button";
import { createEvent } from "@/services/api/events";

export default function BuyTicketsButton() {
  const handleClick = () => {
    cleanPath();
    createEvent("BuyTicketsFirstButtonClicked");
  };

  return (
    <Button isLink href="#comprar-entradas" onClick={handleClick}>
      Comprar entradas
    </Button>
  );
}
