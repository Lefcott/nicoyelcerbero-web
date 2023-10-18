import BuyTicketsButton from "@/components/BuyTIcketsButton";
import BuyTicketsForm from "@/components/BuyTicketsForm";
import Layout from "@/components/Layout/index";
import ShowBanner from "@/components/ShowBanner";
import ShowInfo from "@/components/ShowInfo/index";
import { getShow, getShows } from "@/services/api/shows";
import "@/sockets/showDetailsPage";
import { useShowStore } from "@/store/show";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useRef } from "react";
import NotFoundPage from "./404";
import Link from "next/link";
import { PreviousShows } from "@/components/PreviousShows";

export default function ShowDetails({ show }) {
  const showFromStore = useShowStore((state) => state);
  const firstRenderRef = useRef(true);

  if (firstRenderRef.current) {
    showFromStore.update(show);
  }

  useEffect(() => {
    firstRenderRef.current = false;
  }, []);

  if (!show) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Head>
        <title>Ácidamente - comprar entradas</title>
      </Head>
      <Script src="https://sdk.mercadopago.com/js/v2" />
      <Layout>
        <div className="flex flex-col justify-start w-full md:w-fit items-center">
          <ShowBanner />
          <div className="mt-5 px-8 md:px-0">
            <ShowInfo />
          </div>
          {!show.isFree && (
            <>
              <div className="mt-5 px-8 md:px-0">
                <BuyTicketsButton />
              </div>
              <div className="mt-20 px-8 md:px-0 flex justify-center">
                <PreviousShows />
              </div>
              <div className="mt-20 px-0 md:px-0">
                <BuyTicketsForm />
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const { data: shows } = await getShows();

  return {
    paths: shows.map((show) => ({ params: { showKey: show.key } })),
    fallback: true,
  };
}

export async function getStaticProps(props) {
  const { showKey } = props.params;
  const showResponse = await getShow(showKey).catch(console.error);
  const show = showResponse?.data || null;

  return {
    props: {
      show,
    },
  };
}
