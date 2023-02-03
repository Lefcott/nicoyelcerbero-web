import BuyTicketsButton from "@/components/BuyTIcketsButton";
import BuyTicketsForm from "@/components/BuyTicketsForm";
import Layout from "@/components/Layout/index";
import ShowBanner from "@/components/ShowBanner";
import ShowInfo from "@/components/ShowInfo/index";
import { getShow, getShows } from "@/services/api/shows";
import Head from "next/head";
import Script from "next/script";
import NotFoundPage from "./404";

export default function ShowDetails({ show }) {
  if (!show) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Head>
        <title>Nico y El Cerbero - comprar entradas</title>
      </Head>
      <Script src="https://sdk.mercadopago.com/js/v2" />
      <Layout>
        <div className="flex flex-col justify-start">
          <ShowBanner show={show} />
          <div className="mt-5 px-8 md:px-0">
            <ShowInfo show={show} />
          </div>
          {!show.isFree && (
            <>
              <div className="mt-5 px-8 md:px-0">
                <BuyTicketsButton />
              </div>
              <div className="mt-96 px-8 md:px-0">
                <BuyTicketsForm show={show} />
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
