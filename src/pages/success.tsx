import Layout from "@/components/Layout/index";
import "@/sockets/conversationSocket";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SuccessPage() {
  const { query } = useRouter();
  const { payerEmail, showDate } = query;
  const guests = (query.guests && JSON.parse(query.guests as string)) || [];
  const conditionalS = guests.length > 1 ? "s" : "";

  return (
    <>
      <Head>
        <title>Ácidamente - Entradas</title>
      </Head>
      <Layout>
        <h1 className="text-xl max-w-[80%] md:max-w-[50%]">
          Ya tenés tu{conditionalS} entrada{conditionalS} para el show de
          Ácidamente del {showDate}!
        </h1>
        <p className="pt-4 max-w-[80%] md:max-w-[50%] text-sm">
          Anotamos a las siguientes personas en la lista de invitados:
        </p>
        <ul className="pt-4">
          {guests.map((guest, i) => (
            <div
              key={i}
              className="bg-gray-500 p-1 rounded-sm m-3 flex justify-center items-center"
            >
              {guest.firstName} {guest.lastName}
            </div>
          ))}
        </ul>
        <p className="pt-4 max-w-[80%] md:max-w-[50%] text-sm">
          Para acceder al evento, las personas en la lista solo tendrán que
          decir su nombre y apellido en la entrada.
        </p>
        <p className="pt-4 max-w-[80%] md:max-w-[50%] text-sm">
          Te enviamos un email a {payerEmail} para que tengas esta información a
          mano :)
        </p>
      </Layout>
    </>
  );
}
