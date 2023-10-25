import Layout from "@/components/Layout/index";
import "@/sockets/conversationSocket";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SuccessPage() {
  const { query } = useRouter();
  const { payerEmail } = query;
  const guestsCount = +(query.guestsCount as string);
  const conditionalS = guestsCount > 1 ? "s" : "";
  const conditionalCount = guestsCount > 1 ? ` ${guestsCount}` : "";

  return (
    <>
      <Head>
        <title>Ácidamente - Entradas</title>
      </Head>
      <Layout>
        <h1 className="text-xl max-w-[80%] md:max-w-[50%]">
          Ya tenés tu{conditionalS}
          {conditionalCount} entrada{conditionalS} para el show de Ácidamente!
        </h1>
        <p className="pt-4 max-w-[80%] md:max-w-[50%] text-sm">
          {guestsCount > 1 ? (
            <>
              Anotamos el nombre y apellido de las personas en la lista de
              invitados. Para acceder al evento, los invitados solo tendrán que
              decir su nombre y apellido en la entrada.
            </>
          ) : (
            <>
              Ya te anotamos en la lista de invitados. Para acceder al evento,
              solo tendrás que decir tu nombre y apellido en la entrada.
            </>
          )}
        </p>
        <p className="pt-4 max-w-[80%] md:max-w-[50%] text-sm">
          Te enviamos un email a {payerEmail} para que tengas esta información a
          mano :)
        </p>
      </Layout>
    </>
  );
}
