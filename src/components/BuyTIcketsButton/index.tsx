import Link from "next/link";
import Button from "../Button";

export default function BuyTicketsButton() {
  return (
    <Link href="#comprar-entradas">
      <Button>Comprar entradas</Button>
    </Link>
  );
}
