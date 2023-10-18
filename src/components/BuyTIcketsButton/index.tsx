import Button from "../Button";

export default function BuyTicketsButton() {
  const handleClick = () => {
    history.replaceState({}, document.title, window.location.pathname);
  };

  return (
    <Button isLink href="#comprar-entradas" onClick={handleClick}>
      Comprar entradas
    </Button>
  );
}
