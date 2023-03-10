let mercadoPago;

declare global {
  interface Window {
    MercadoPago: any;
  }
}

export function getMercadoPago() {
  return (
    mercadoPago || new window.MercadoPago(process.env.MERCADO_PAGO_PUBLIC_KEY)
  );
}

export async function openCheckout(preferenceId) {
  const mp = getMercadoPago();

  const checkout = mp.checkout({
    preference: {
      id: preferenceId,
    },
    autoOpen: true,
  });

  await checkout.render({
    container: ".cho-container",
    label: "Pay",
  });
}
