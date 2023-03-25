import Layout from "@/components/Layout/index";
import RefundForm from "@/components/RefundForm";
import {
  getTicketPayment,
  getTicketPaymentIds,
} from "@/services/api/ticketPayments";
import { useTicketPaymentStore } from "@/store/ticketPayment";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useRef } from "react";
import NotFoundPage from "../404";
import "@/sockets/refundPage";

export default function Refund({ ticketPayment }) {
  const ticketPaymentFromStore = useTicketPaymentStore((state) => state);
  const firstRenderRef = useRef(true);
  const router = useRouter();
  const { token } = router.query;

  if (firstRenderRef.current) {
    ticketPaymentFromStore.update(ticketPayment);
  }

  useEffect(() => {
    firstRenderRef.current = false;
  }, []);

  if (!ticketPayment) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Head>
        <title>Nico y El Cerbero - devolver entradas</title>
      </Head>
      <Script src="https://sdk.mercadopago.com/js/v2" />
      <Layout>
        <div className="flex flex-col justify-start">
          <RefundForm token={token} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const { data: ticketPaymentIds } = await getTicketPaymentIds();

  return {
    paths: ticketPaymentIds.map((ticketPaymentId) => ({
      params: { ticketPaymentId },
    })),
    fallback: true,
  };
}

export async function getStaticProps(props) {
  const { ticketPaymentId } = props.params;
  const ticketPaymentResponse = await getTicketPayment(ticketPaymentId).catch(
    console.error
  );
  const ticketPayment = ticketPaymentResponse?.data || null;

  return {
    props: {
      ticketPayment,
    },
  };
}
