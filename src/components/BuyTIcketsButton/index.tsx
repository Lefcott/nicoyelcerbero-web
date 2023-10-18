import { cleanPath } from "@/utils/cleanPath";
import Button from "../Button";

export default function BuyTicketsButton() {
  return (
    <Button isLink href="#comprar-entradas" onClick={cleanPath}>
      Comprar entradas
    </Button>
  );
}
